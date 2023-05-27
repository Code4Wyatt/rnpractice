import { View, Text } from 'react-native';
import { Platform } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import BottomNav from '../components/BottomNav';
import TopNavWeb from '../components/TopNavWeb';
const CoachingScreen = () => {
  const navigation = useNavigation();

  const renderPlatformSpecificContent = () => {
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    }, [navigation]);

    if (Platform.OS === 'web') {
        // Web-specific content
        return (
          <View style={{ flex: 1, backgroundColor: '#333333' }}>
            <TopNavWeb />
          <Text className='font-extrabold color-white font-size-100'>Coaching and Advice yer maw</Text>
          <BottomNav />
        </View>
        );
    } else if (Platform.OS === 'ios' || Platform.OS === 'android') {
        // Mobile-specific content

        return (
          <View style={{ flex: 1, backgroundColor: '#333333' }}>
          <Text className='font-extrabold color-white font-size-100'>Coaching and Adviceeee</Text>
          <BottomNav />
        </View>
        );
    }
};
  return (
    <View style={{ flex: 1 }}>
    {renderPlatformSpecificContent()}
</View>
  )
}

export default CoachingScreen