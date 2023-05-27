import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import useAuth, { AuthProvider } from './hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { WebBrowserPresentationStyle } from 'expo-web-browser';

const AuthContext = React.createContext({});

export default function App() {
  const user = AsyncStorage.getItem('@user');
  return (
    <NavigationContainer>
      <AuthContext.Provider value={user}>
        <StackNavigator />
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

