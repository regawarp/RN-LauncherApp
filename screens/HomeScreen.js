import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
    View,
    Button,
    Text,
    Linking
} from 'react-native';

const HomeScreen = ({ navigation }) => {
    const BASE_LAUNCHED_URL = "https://www.launchedapp.com"
    const [token, setToken] = React.useState('');

    React.useEffect(() => {
        const sessionValidation = async () => {
            const isLogin = await AsyncStorage.getItem('sessionId')
            if (!isLogin) {
                navigation.replace("Login");
            }
            console.log("session id", isLogin)
            setToken(isLogin);
        }
        sessionValidation()
    }, [])

    function handleLogout() {
        console.log("Logout")
        const logout = async () => {
            await AsyncStorage.clear()
            navigation.replace("Login");
        }
        logout()
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                onPress={() => Linking.openURL(`${BASE_LAUNCHED_URL}/home/${token}`)}
                title="Go to Launched App"
            />
            <Button
                onPress={() => Linking.openURL(`${BASE_LAUNCHED_URL}/a/${token}`)}
                title="Go to Launched App - Screen A"
            />
            <Button
                onPress={() => Linking.openURL(`${BASE_LAUNCHED_URL}/b/${token}`)}
                title="Go to Launched App - Screen B"
            />
            <Button
                title="Logout"
                onPress={() => handleLogout()}
            />
        </View>
    )
}

export default HomeScreen;