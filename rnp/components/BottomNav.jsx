import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const BottomNav = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20,
      }}
    >
      <LinearGradient
        colors={['#FFD999', '#FF7700']}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          flexDirection: 'row',
          width: '95%',
          height: '70%',
          justifyContent: 'space-evenly',
          left: 10,
          borderRadius: 40,
          overflow: 'hidden',
        }}
      >
        <Pressable
          android_ripple={{ borderless: true, radius: 50 }}
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 10,
          }}
          onPress={() => navigation.navigate('Missions')}
        >
          <AntDesign
            name="carryout"
            size={24}
            color="black"
            style={{ alignSelf: 'center' }}
          />
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Missions</Text>
        </Pressable>

        <Pressable
          android_ripple={{ borderless: true, radius: 50 }}
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 10,
          }}
          onPress={() => navigation.navigate('Financial')}
        >
          <FontAwesome
            name="money"
            size={24}
            color="black"
            style={{ alignSelf: 'center' }}
          />
          <Text style={{ color: 'white', fontWeight: 'bold'  }}>Financial</Text>
        </Pressable>

        <Pressable
          android_ripple={{ borderless: true, radius: 50 }}
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 10,
          }}
          onPress={() => navigation.navigate('Habits')}
        >
          <AntDesign
            name="checksquareo"
            size={24}
            color="black"
            style={{ alignSelf: 'center' }}
          />
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Habits</Text>
        </Pressable>

        <Pressable
          android_ripple={{ borderless: true, radius: 50 }}
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 10,
          }}
          onPress={() => navigation.navigate('Coaching')}
        >
          <MaterialCommunityIcons
            name="help-network-outline"
            size={24}
            color="black"
            style={{ alignSelf: 'center' }}
          />
          <Text style={{ color: 'white', fontWeight: 'bold'  }}>Coaching</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default BottomNav;
