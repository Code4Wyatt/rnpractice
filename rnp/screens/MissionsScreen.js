import { View, Text } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity as TouchableOpacityWeb } from 'react-native-web';
import BottomNav from '../components/BottomNav';
import TopNavWeb from '../components/TopNavWeb';
import { Platform, TouchableOpacity, Image, StatusBar } from 'react-native';
import MissionList from '../components/MissionList';
import TopNavMobile from '../components/TopNavMobile';

const MissionsScreen = () => {
  const [currentOption, setCurrentOption] = useState(1);
  const navigation = useNavigation()
  let missions = true;

  const handleOptionChange = (option) => {
    setCurrentOption(option);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const renderPlatformSpecificContent = () => {
    if (Platform.OS === 'web') {
      // Web-specific content
      return (
        <View style={{ flex: 1, backgroundColor: '#333333' }}>
          <StatusBar barStyle="light-content" />
          <TopNavWeb />
          <TouchableOpacityWeb className='bg-white' onPress={async () => {
            await AsyncStorage.removeItem('@user').then(() => navigation.navigate('Login'));
          }}>
            <Text style={{ marginVertical: 10 }}>Sign Out</Text>
          </TouchableOpacityWeb>

          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <TouchableOpacityWeb
                        style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: '10%', borderRadius: '3%' }}
                        onPress={() => navigation.navigate('Missions')}>
                        <Text style={{ marginVertical: 10, padding: 10 }}>Missions</Text>
                    </TouchableOpacityWeb>

                    <TouchableOpacityWeb style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: '10%', borderRadius: '3%' }} onPress={() => navigation.navigate('Financial')}>
                        <Text style={{ marginVertical: 10 }}>Financial</Text>
                    </TouchableOpacityWeb>

                    <TouchableOpacityWeb style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: '10%', borderRadius: '3%' }} onPress={() => navigation.navigate('Habits')}>
                        <Text style={{ marginVertical: 10 }}>Habit Tracking</Text>
                    </TouchableOpacityWeb>

                    <TouchableOpacityWeb style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', width: '10%', borderRadius: '3%' }} onPress={() => navigation.navigate('Coaching')}>
                        <Text style={{ marginVertical: 10 }}>Coaching</Text>
                    </TouchableOpacityWeb>
                </View> */}
          <BottomNav />
        </View>
      );
    } else if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // Mobile-specific content

      return (
        <View style={{ flex: 1, backgroundColor: '#333333' }}>
          {/* <Image source={{uri: LogoImage}} /> */}
          <TopNavMobile />
          <TouchableOpacity style={{ backgroundColor: '#FF7F50' }} onPress={async () => {
            await AsyncStorage.removeItem('@user').then(() => navigation.navigate('Login'));
          }}>
            <Text style={{ marginVertical: 10 }}>Sign Out</Text>
          </TouchableOpacity>
          <View style={{
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            height: '17%',
            width: '95%',
            backgroundColor: 'rgba(255, 127, 80, 0.2)',
            padding: 10,
            display: 'flex',
            borderRadius: 10
          }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 10,
                textAlign: 'center'
              }}>
                Missions
              </Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{
              fontSize: 18,
              color: 'white'
            }}>
              Missions Completed
            </Text>
              <Text>4</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{
              fontSize: 18,
              color: 'white'
            }}>
              In Progress
            </Text>
              <Text>2</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}><Text style={{
              fontSize: 18,
              color: 'white'
            }}>
              Todays Tasks
            </Text>
              <Text>0</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Missions</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginHorizontal: 5,
                  backgroundColor: currentOption === 2 ? '#FF7F50' : 'transparent',
                }}
                onPress={() => handleOptionChange(1)}

              >
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>In Progress</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginHorizontal: 5,
                  backgroundColor: currentOption === 1 ? '#FF7F50' : 'transparent',
                }}
                onPress={() => handleOptionChange(2)}
              >
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Completed</Text>
              </TouchableOpacity>
            </View>
          </View>

          { missions ? 
            <View style={{}}>
              <MissionList />
            </View> 
            : 
            <View>
              <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 18}}>No missions yet, start one!</Text>
            </View> 
          }
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

export default MissionsScreen