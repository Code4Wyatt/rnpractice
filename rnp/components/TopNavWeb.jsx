import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { Avatar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../assets/index';

const TopNavWeb = () => {
  const [user, setUser] = useState(null);
  const [userImage, setUserImage] = useState(null);

  useEffect(() => {   
    const getUserInfoFromAsyncStorage = async () => {
      const storedUser = await AsyncStorage.getItem('@user');
      if (storedUser !== null) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setUserImage(parsedUser.picture);
      }
    };

    getUserInfoFromAsyncStorage();
  }, []);

  const handleAvatarPress = () => {
    // Handle avatar press event
    console.log('Avatar pressed');
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
      <TouchableOpacity onPress={() => console.log('Menu icon pressed')}>
        {/* Replace the placeholder menu icon with your own */}
        <Text>Menu</Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        {/* Replace the placeholder image with your own */}
        <Image source={images.main_logo} style={{ width: 130, height: 80, alignSelf: 'center', marginTop: 10, marginBottom: 10 }} />
      </View>
      <TouchableOpacity onPress={handleAvatarPress}>
        {userImage ? (
          <Avatar
            source={{
              uri: userImage,
            }}
          />
        ) : (
          <Avatar rounded title="MD" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default TopNavWeb;
