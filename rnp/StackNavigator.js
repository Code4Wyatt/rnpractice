import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createContext, useEffect, useState } from 'react';
import HomeScreen from './screens/HomeScreen';
// import MissionsScreen from './screens/MissionsScreen';
import LoginScreen from './screens/LoginScreen';
import useAuth from './hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import MissionsScreen from './components/MissionsScreen';
// import HabitScreen from './screens/HabitScreen';
// import CoachingScreen from './screens/CoachingScreen';
// import FinancialScreen from './screens/FinancialScreen';


const AuthContext = createContext({});
const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  // const { user } = useAuth();
  const [user, setUser] = useState(null);
  const navigation = useNavigation();
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = await AsyncStorage.getItem('@user');
    if (user !== null) setUser(user);
  };

  console.log(user);
  return (
    <Stack.Navigator>
      <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Missions" component={MissionsScreen} />
          {/* <Stack.Screen name="Financial" component={FinancialScreen} />
          <Stack.Screen name="Habits" component={HabitScreen} />
          <Stack.Screen name="Coaching" component={CoachingScreen} /> */}
      </>
    </Stack.Navigator>
  )
}

export default StackNavigator