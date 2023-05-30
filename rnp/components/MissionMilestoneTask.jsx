import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const MissionMilestoneTask = ({selectedMilestoneTask}) => {
    const [selectedMilestoneTaskStep, setSelectedMilestoneTaskStep] = useState(null);
  return (
    <View>
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
          onPress={() => setSelectedMilestoneTaskStep('Livingroom')}
        >
          <Text style={{ color: 'white', marginRight: 10 }}>Buy carpet from carpet warehouse</Text>
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
          <Text style={{ color: 'white', marginRight: 10 }}>Move furniture to dining room</Text>
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
          <Text style={{ color: 'white', marginRight: 10 }}>Pull up carpet and take to dump</Text>
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
          <Text style={{ color: 'white', marginRight: 10 }}>Lay carpet and move furniture back in</Text>
        </TouchableOpacity>

        <View style={{ marginLeft: 50, width: 20, height: 20, borderWidth: 1, borderColor: 'black', borderRadius: 3 }} />
      </View>
    
    </View>
    </View>
  )
}

export default MissionMilestoneTask