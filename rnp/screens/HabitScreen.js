import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import BottomNav from './BottomNav'
import TopNavWeb from './TopNavWeb';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
const HabitScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);
  
  return (
    <View style={{ flex: 1, backgroundColor: '#333333' }}>
      <Text>HabitScreen</Text>
      <BottomNav />
    </View>
  )
}

export default HabitScreen