import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MissionMilestones = ({currentMission, setSelectedMilestone}) => {

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
          onPress={() => setSelectedMilestone('Livingroom')}
        >
          <Text style={{ color: 'white', marginRight: 10 }}>Livingroom</Text>
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

        >
          <Text style={{ color: 'white', marginRight: 10 }}>Kids Room</Text>
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
 
        >
          <Text style={{ color: 'white', marginRight: 10 }}>Parents Room</Text>
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
        >
          <Text style={{ color: 'white', marginRight: 10 }}>Kitchen</Text>
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

        >
          <Text style={{ color: 'white', marginRight: 10 }}>Garden</Text>
        </TouchableOpacity>

        {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={{ alignSelf: 'center' }}
        /> */}
      </View>
    </View>
  )
}

export default MissionMilestones