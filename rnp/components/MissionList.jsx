import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MissionList = ({ setSelectedMission }) => {
    const [isSelected, setSelection] = useState(false);
  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity
          style={{
            width: '70%',
            padding: 10,
            backgroundColor: '#333333',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#00aced',
            borderWidth: 1
          }}
          onPress={() => {
            setSelectedMission('Renovate the house')
          }}
        >
          <Text style={{ color: 'white', marginRight: 10 }}>Renovate the house</Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 50, width: 20, height: 20, borderWidth: 1, borderColor: 'black', borderRadius: 3 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity
          style={{
            width: '70%',
            padding: 10,
            backgroundColor: '#333333',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#00aced',
            borderWidth: 1
          }}
          onPress={() => {
            setSelectedMission('Create plan for start up')
          }}
        >
          <Text style={{ color: 'white', marginRight: 10 }}>Create plan for start up</Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 50, width: 20, height: 20, borderWidth: 1, borderColor: 'black', borderRadius: 3 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity
          style={{
            width: '70%',
            padding: 10,
            backgroundColor: '#333333',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#00aced',
            borderWidth: 1
          }}
          onPress={() => {
            setSelectedMission('Organise holiday')
          }}
        >
          <Text style={{ color: 'white', marginRight: 10 }}>Organise holiday</Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 50, width: 20, height: 20, borderWidth: 1, borderColor: 'black', borderRadius: 3 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TouchableOpacity
          style={{
            width: '70%',
            padding: 10,
            backgroundColor: '#333333',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#00aced',
            borderWidth: 1
          }}
          onPress={() => {
            setSelectedMission('Write best man speech')
          }}
        >
          <Text style={{ color: 'white', marginRight: 10 }}>Write best man speech</Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 50, width: 20, height: 20, borderWidth: 1, borderColor: 'black', borderRadius: 3 }} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            width: '70%',
            padding: 10,
            backgroundColor: '#333333',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#00aced',
            borderWidth: 1
          }}
          onPress={() => {
            setSelectedMission('Complete motorbike license')
          }}
        >
          <Text style={{ color: 'white', marginRight: 10 }}>Complete motorbike license</Text>
        </TouchableOpacity>

        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{ alignSelf: 'center' }}
        /> */}
      </View>
    </View>
  );
};

export default MissionList;
