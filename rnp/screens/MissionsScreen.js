import { View, Text } from 'react-native'
import React from 'react'
import BottomNav from '../components/BottomNav'
const ChatScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#333333' }}>
      <Text>Missions</Text>
      <BottomNav />
    </View>
  )
}

export default ChatScreen