import { View, Text, Button, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native-web';
import images from '../assets/index';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity as TouchableOpacityWeb } from 'react-native-web';
import { Platform } from 'react-native';

const AuthContext = createContext({});

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  // const { promptAsync, user } = useAuth();
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '724374681651-k5g9sq5etlk9tqd8snsj16daf7e2lfsv.apps.googleusercontent.com',
    iosClientId: '724374681651-9c6mdrjbeu6lettqfrl92544ood2rf9k.apps.googleusercontent.com',
    webClientId: '724374681651-k5g9sq5etlk9tqd8snsj16daf7e2lfsv.apps.googleusercontent.com',
    expoClientId: '724374681651-968te3m9hjqt0mascadb4jnrbqrd46ls.apps.googleusercontent.com',
    ...{ useProxy: true }
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  useEffect(() => {
    if (userInfo !== null) {
      navigation.navigate('Home');
    }
  }, [userInfo, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const navigateToHome = () => {
    navigation.navigate('Missions');
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await response.json();
      console.log('user', user)
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem('@user');

    if (!user) {
      if (response?.type == 'success') {
        await getUserInfo(response.authentication.accessToken);
        navigateToHome()
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const getUserFromAsyncStorage = async () => {
  //     const storedUser = await AsyncStorage.getItem('@user');
  //     setUser(storedUser);
  //   };

  //   getUserFromAsyncStorage();
  // }, []);

  // console.log(user)

  const renderPlatformSpecificContent = () => {
    if (Platform.OS === 'web') {
      // Web-specific content
      return (
        <View style={{ flex: 1, backgroundColor: '#333333' }}>
          <View style={{ width: '22%', position: 'absolute', bottom: 5, left: '39%' }}>
            <LinearGradient
              colors={['#FFD9B3', '#FF7700']}
              start={[0, 0]}
              end={[1, 1]}
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                shadowColor: '#FF7700',
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4,
                elevation: 5,
                padding: 10,
                marginBottom: 20,
              }}
            >
              <TouchableOpacityWeb onPress={() => promptAsync()} style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>Sign in with Google</Text>
              </TouchableOpacityWeb></LinearGradient>
          </View>
        </View>
      );
    } else if (Platform.OS === 'ios' || Platform.OS === 'android') {
      // Mobile-specific content

      return (
        <View style={{ flex: 1, backgroundColor: '#333333' }}>
          <View style={{ width: '40%', position: 'absolute', bottom: 5, left: '29%' }}>
            <LinearGradient
            colors={['#FFD9B3', '#FF7700']}
            start={[0, 0]}
            end={[1, 1]}
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              shadowColor: '#FF7700',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.5,
              shadowRadius: 4,
              elevation: 5,
              padding: 10,
              marginBottom: 20,
            }}
          ><TouchableOpacity onPress={() => promptAsync()} style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }} ><Text>Sign in with Google</Text></ TouchableOpacity></LinearGradient></View>
          


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

export default LoginScreen