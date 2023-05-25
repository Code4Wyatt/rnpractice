import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '724374681651-iejpnnd5b47mqcf9ldu07pkq9l2l963k.apps.googleusercontent.com',
    iosClientId: '724374681651-9c6mdrjbeu6lettqfrl92544ood2rf9k.apps.googleusercontent.com',
    webClientId: '724374681651-k5g9sq5etlk9tqd8snsj16daf7e2lfsv.apps.googleusercontent.com',
    expoClientId: '724374681651-968te3m9hjqt0mascadb4jnrbqrd46ls.apps.googleusercontent.com',
    ...{useProxy: true}
  });

  React.useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  async function handleSignInWithGoogle() {
    const user = await AsyncStorage.getItem('@user');

    if (!user) {
      if (response?.type == 'success') {
        await getUserInfo(response.authentication.accessToken);
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
      console.log('suuaud', user)
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  }

  const { user } = useAuth();
  console.log(user)
  return (
    <View>
      
      <Text>{JSON.stringify(userInfo)}</Text>
      <Button title="Sign in with Google" onPress={() => promptAsync()} />
      <Button title="Sign out" onPress={() => AsyncStorage.removeItem("@user")} />
    </View>
  )
}

export default LoginScreen