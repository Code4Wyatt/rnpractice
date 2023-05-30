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
import AddButton from './AddButton';

const BottomNav = ({ setSelectedScreen }) => {
  const navigation = useNavigation();
  
  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 0,
        
      }}
    >
      <LinearGradient
        colors={['#333333','#333333']}
        start={[0, 0]}
        end={[1, 1]}
        style={{
          flexDirection: 'row',
          width: '100%',
          height: '80%',
          justifyContent: 'space-evenly',
          left: 0,
          top: 5,
          overflow: 'hidden',
          opacity: 0.8,
          borderTopColor: '#00aced',
          borderTopWidth: 1,
        }}
      >
        <Pressable
          android_ripple={{ borderless: true, radius: 50 }}
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 10,
          }}
          onPress={() => setSelectedScreen('Missions')}
        >
          <AntDesign
            name="carryout"
            size={24}
            color="white"
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
          onPress={() => setSelectedScreen('Financial')}
        >
          <FontAwesome
            name="money"
            size={24}
            color="white"
            style={{ alignSelf: 'center' }}
          />
          <Text style={{ color: 'white', fontWeight: 'bold'  }}>Financial</Text>
        </Pressable>
          
        <AddButton />

        <Pressable
          android_ripple={{ borderless: true, radius: 50 }}
          style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            padding: 10,
          }}
          onPress={() => setSelectedScreen('Habits')}
        >
          <AntDesign
            name="checksquareo"
            size={24}
            color="white"
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
          onPress={() => setSelectedScreen('Coaching')}
        >
          <MaterialCommunityIcons
            name="help-network-outline"
            size={24}
            color="white"
            style={{ alignSelf: 'center' }}
          />
          <Text style={{ color: 'white', fontWeight: 'bold'  }}>Coaching</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
};

export default BottomNav;
