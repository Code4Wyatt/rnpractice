import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import images from '../assets/index';
import MenuModal from './MenuModal';

const TopNavMobile = () => {
    const [user, setUser] = useState(null);
    const [userImage, setUserImage] = useState(null);
    const [showModal, setShowModal] = useState(false);
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

      const toggleModal = () => {
        setShowModal(!showModal);
      };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
  <TouchableOpacity onPress={() => toggleModal()}>
    {/* Left icon or menu */}
    {/* You can replace this with your own menu icon */}
    <Icon name="menu" color='#00aced'/>
  </TouchableOpacity>
    {showModal == true ? <MenuModal /> : null}
  <Image source={images.main_logo} style={{ width: 100, height: 40 }} />

  <TouchableOpacity>
    {/* Right icon or avatar */}
    {/* You can replace this with your own avatar component */}
    {userImage ? (
        <View style={{ border: '10px solid #00aced' }}>
            <Avatar
            source={{
              uri: userImage,
            }}
          />
        </View>
        ) : (
          <Avatar rounded title="MD" />
        )}
  </TouchableOpacity>
</View>
  )
}

export default TopNavMobile