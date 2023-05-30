import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MissionMilestones from "./MissionMilestones";
import MissionMilestone from "./MissionMilestone";
import MissionMilestoneTask from "./MissionMilestoneTasks";

const Mission = ({ mission, setSelectedMission }) => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [selectedMilestoneTask, setSelectedMilestoneTask] = useState(null);

  let currentMission = mission;
  let milestones = true;
  let milestone = 'Livingroom';
  let milestoneTask = 'Renovate the house';  

  const renderContent = () => {
    if (selectedMilestoneTask) {
        return <MissionMilestoneTask milestoneTask={milestoneTask} setSelectedMilestoneTask={setSelectedMilestoneTask} />
    } else if (selectedMilestone) {
        return <MissionMilestone milestone={milestone} />
    } else if (!selectedMilestone && milestones) {
        return <MissionMilestones currentMission={currentMission} setSelectedMilestone={setSelectedMilestone} />
    }
  }

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            {currentMission} 
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* <TouchableOpacity
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      borderRadius: 5,
                      marginHorizontal: 5,
                      backgroundColor: "#00aced",
                      borderColor: "#00aced",
                      borderWidth: 1,
                    }}
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
                  </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 5,
              marginHorizontal: 5,
              backgroundColor: "transparent",
              borderColor: "#00aced",
              borderWidth: 1,
            }}
            onPress={() => setSelectedMission(null)}
        >
            <Text
              style={{
                fontSize: 16,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Back
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {renderContent()}
    </View>
  );
};

export default Mission;
