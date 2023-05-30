import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity as TouchableOpacityWeb } from "react-native-web";
import BottomNav from "./BottomNav";
import TopNavWeb from "./TopNavWeb";
import { Platform, TouchableOpacity, Image, StatusBar } from "react-native";
import MissionList from "./MissionList";
import TopNavMobile from "./TopNavMobile";
import Mission from "./MissionScreen";
import MissionMilestone from "./MissionMilestone";

const MissionsScreen = () => {
  const [currentOption, setCurrentOption] = useState(1);
  const [selectedMission, setSelectedMission] = useState(null);
  const navigation = useNavigation();
  let missions = true;

  const handleOptionChange = (option) => {
    setCurrentOption(option);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const handleMissionSelect = (mission) => {
    setSelectedMission(mission);
  };

  const renderPlatformSpecificContent = () => {
    if (Platform.OS === "web") {
      // Web-specific content
      return (
        <View style={{ flex: 1, backgroundColor: "#333333" }}>
          <StatusBar barStyle="light-content" />
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
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 10,
              height: "17%",
              width: "95%",
              backgroundColor: "#333333",
              padding: 10,
              display: "flex",
              borderRadius: 10,
              borderColor: "#00aced",
              borderWidth: 3,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: 10,
                  textAlign: "center",
                }}
              >
                Missions
              </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                }}
              >
                Missions Completed
              </Text>
              <Text style={{ color: "white" }}>5</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                }}
              >
                In Progress
              </Text>
              <Text style={{ color: "white" }}>5</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                }}
              >
                Todays Tasks
              </Text>
              <Text style={{ color: "white" }}>0</Text>
            </View>
          </View>

          {selectedMission ? (
            <Mission mission={selectedMission} setSelectedMission={setSelectedMission} />
          ) : missions ? (
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                  >
                    Missions
                  </Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 5,
                      marginHorizontal: 5,
                      backgroundColor:
                        currentOption === 2 ? "transparent" : "#00aced",
                      borderColor: "#00aced",
                      borderWidth: 1,
                    }}
                    onPress={() => handleOptionChange(1)}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      In Progress
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 5,
                      marginHorizontal: 5,
                      backgroundColor:
                        currentOption === 1 ? "transparent" : "#00aced",
                      borderColor: "#00aced",
                      borderWidth: 1,
                    }}
                    onPress={() => handleOptionChange(2)}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "white",
                        fontWeight: "bold",
                      }}
                    >
                      Completed
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{}}>
                <MissionList setSelectedMission={setSelectedMission} />
              </View>
            </>
          ) : (
            <View>
              <Text
                style={{ fontWeight: "bold", color: "white", fontSize: 18 }}
              >
                No missions yet, start one!
              </Text>
            </View>
          )}
          <BottomNav />
        </View>
      );
    }
  };

  return <View style={{ flex: 1 }}>{renderPlatformSpecificContent()}</View>;
};

export default MissionsScreen;
