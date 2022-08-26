import { View, Text } from 'react-native'
import React from 'react'

export default function ScreenA({ route }) {
  console.log(route);
  return (
    <View>
      <Text>ScreenA</Text>
    </View>
  )
}