import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const MenuModal = ({ setShowModal }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const underlineWidth = new Animated.Value(0);
  const navigation = useNavigation();
  const closeModal = () => {
    setModalVisible(false);
    setShowModal(false);
  };

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };

  const startUnderlineAnimation = () => {
    Animated.timing(underlineWidth, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const resetUnderlineAnimation = () => {
    Animated.timing(underlineWidth, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const renderOption = (option) => {
    const isSelected = selectedOption === option;

    return (
      <TouchableOpacity
        key={option}
        style={{
          backgroundColor: isSelected
            ? "rgba(128, 128, 128, 0.2)"
            : "transparent",
          height: 30,
          marginTop: 20,
        }}
        onPress={async () =>
          option === "Sign Out"
            ? await AsyncStorage.removeItem("@user").then(() =>
                navigation.navigate("Login")
              )
            : handleOptionPress(option)
        }
        onPressIn={startUnderlineAnimation}
        onPressOut={resetUnderlineAnimation}
      >
        <View style={{ alignItems: "center" }}>
          <Animated.View
            style={{
              width: underlineWidth.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
              height: 2,
              backgroundColor: isSelected ? "orange" : "transparent",
              position: "absolute",
              bottom: 0,
            }}
          />
          <Text style={{ color: "white", fontSize: 16 }}>{option}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ position: "absolute", top: 20, left: 20 }}>
      <Modal
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        animationInTiming={500}
        animationOutTiming={2000}
        isVisible={modalVisible}
        useNativeDriver={true}
        onBackButtonPress={() => {
          setShowModal(!modalVisible);
        }}>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            width: Dimensions.get("screen").width / 2,
            height: Dimensions.get("screen").height,
            paddingTop: 20,
            paddingHorizontal: 20,
            right: 20,
          }}>
          <TouchableOpacity
            onPress={() => closeModal()}
            style={{ marginTop: 15, right: 10 }}>
            <Text style={{ color: "white", fontSize: 20 }}>X</Text>
          </TouchableOpacity>

          {["Home", "About", "Contact Us", "Sign Out"].map((option) =>
            renderOption(option)
          )}

          <View style={{ position: "absolute", bottom: 20, left: 70 }}>
            <Text style={{ color: "white" }}>ADHDone</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MenuModal;
