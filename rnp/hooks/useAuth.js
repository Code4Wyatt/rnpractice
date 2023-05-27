import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

WebBrowser.maybeCompleteAuthSession();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '724374681651-iejpnnd5b47mqcf9ldu07pkq9l2l963k.apps.googleusercontent.com',
    iosClientId: '724374681651-9c6mdrjbeu6lettqfrl92544ood2rf9k.apps.googleusercontent.com',
    webClientId: '724374681651-k5g9sq5etlk9tqd8snsj16daf7e2lfsv.apps.googleusercontent.com',
    expoClientId: '724374681651-968te3m9hjqt0mascadb4jnrbqrd46ls.apps.googleusercontent.com',
    ...{ useProxy: true }
  });

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem('@user');

    if (!user) {
      if (response?.type == 'success') {
        const accessToken = response.authentication.accessToken;
        setToken(accessToken);
        await getUserInfo(accessToken);
      }
    } else {
      setUserInfo(JSON.parse(user));
    }
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
      setUserInfo(JSON.parse(user));
    } catch (error) {
      console.log(error);
    }
  }

  const user = userInfo;
  console.log('useAuth user', user)
  return (
    <AuthContext.Provider value={{
      user: user,
      handleSignInWithGoogle,
      promptAsync,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}