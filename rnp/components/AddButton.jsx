import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddButton = () => {
    const navigation = useNavigation();
    return (
        <View style={{ borderWidth: 1,
            borderColor: 'white', backgroundColor: '#333333', transform: [{ rotate: '0deg' }] }}>
            <Pressable
                android_ripple={{ borderless: true, radius: 50 }}
                style={{
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    padding: 10,
                    transform: [{ rotate: '0deg' }],
                    width: 50,
                    height: 50,
                    
                    borderRadius: 5,
                    border: '1px solid black'
                }}
                onPress={() => navigation.navigate('Financial')}
            >
                 <View style={{}}><Text
                    style={{
                        color: '#00aced',
                        fontWeight: 'bold',
                        fontSize: 24,
                        alignSelf: 'center',
                        bottom: 3
                    }}
                >
                    +
                </Text></View>
                
            </Pressable>
        </View>
    )
}

export default AddButton