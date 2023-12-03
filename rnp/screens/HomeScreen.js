import { View, Text, TouchableOpacity } from "react-native";
import {
  Image,
  TouchableOpacity as TouchableOpacityWeb,
} from "react-native-web";
import { Platform } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import BottomNav from "../components/BottomNav";
import TopNavWeb from "../components/TopNavWeb";
import Logo from "../assets/logo.png";
import TopNavMobile from "../components/TopNavMobile";
import MissionsScreen from "../screens/MissionsScreen";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [screenFocused, setScreenFocused] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedScreen, setSelectedScreen] = useState('Missions');
  const userObject = JSON.parse(user);

  useEffect(() => {
    const getUserInfoFromAsyncStorage = async () => {
      const user = await AsyncStorage.getItem("@user");
      if (user !== null) setUser(user);
    };
    getUserInfoFromAsyncStorage();
  }, []);

  console.log(user);

  user !== null && console.log("hme", userObject["given_name"]);

  useFocusEffect(
    React.useCallback(() => {
      setScreenFocused(true);
      const previousRoute =
        navigation?.getState()?.routes?.[
          navigation?.getState()?.routes?.length - 2
        ]?.name;
      if (previousRoute === "Login") {
        navigation.setOptions({ headerLeft: null });
      } else {
        navigation.setOptions({ headerLeft: undefined });
      }
    }, [navigation])
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  function capitalizeWords(str) {
    const words = str.split(" ");

    const capitalizedWords = words.map((word) => {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1);
      return firstLetter + restOfWord;
    });

    const capitalizedStr = capitalizedWords.join(" ");

    return capitalizedStr;
  }

  let capitalisedName = userObject && capitalizeWords(userObject["given_name"]);

  const handleScreenChange = (screenName) => {
    setSelectedScreen(screenName);
  };

  const renderPlatformSpecificContent = () => {
    if (Platform.OS === "web") {
      // Web-specific content
      return (
        <View style={{ flex: 1, backgroundColor: "#333333" }}>
          <TopNavWeb />
          <TouchableOpacityWeb
            className="bg-white"
            onPress={async () => {
              await AsyncStorage.removeItem("@user").then(() =>
                navigation.navigate("Login")
              );
            }}
          >
            <Text style={{ marginVertical: 10 }}>Sign Out</Text>
          </TouchableOpacityWeb>

          <View
            style={{
              backgroundColor: "lightblue",
              margin: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Welcome to ADHDone {userObject && capitalisedName}
            </Text>
          </View>

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
    } else if (Platform.OS === "ios" || Platform.OS === "android") {
      // Mobile-specific content

      return (
        <View style={{ flex: 1, backgroundColor: "#333333" }}>
          <TopNavMobile />
          {selectedScreen === "Missions" && <MissionsScreen />}
          <BottomNav setSelectedScreen={setSelectedScreen}/>
        </View>
      );
    }
  };

  return <View style={{ flex: 1 }}>{renderPlatformSpecificContent()}</View>;
};

export default HomeScreen;
