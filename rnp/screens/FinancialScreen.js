import { View, Text } from 'react-native'
import React from 'react'
import BottomNav from '../components/BottomNav'
const FinancialScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#333333' }}>
      <Text>FinancialScreen</Text>
      <BottomNav />
    </View>
  )
}

export default FinancialScreen