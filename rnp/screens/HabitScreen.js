import { View, Text } from 'react-native'
import React from 'react'
import BottomNav from '../components/BottomNav'
const HabitScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#333333' }}>
      <Text>HabitScreen</Text>
      <BottomNav />
    </View>
  )
}

export default HabitScreen