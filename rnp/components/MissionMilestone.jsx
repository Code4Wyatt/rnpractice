import { View, Text } from "react-native";
import React, { useState } from "react";
import MissionMilestoneTasks from "./MissionMilestoneTasks";
import MissionMilestoneTask from "./MissionMilestoneTask";

const MissionMilestone = ({ milestone }) => {
  const [selectedMilestoneTask, setSelectedMilestoneTask] = useState(null);

  const renderContent = () => {
    if (selectedMilestoneTask) {
      return (
        <>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            {milestone} - {selectedMilestoneTask} 
          </Text>
          <MissionMilestoneTask selectedMilestoneTask={selectedMilestoneTask} />
        </>
      );
    } else {
      return (
        <>
          <Text style={{ fontWeight: "bold", color: "white" }}>
            {milestone} 
          </Text>
          <MissionMilestoneTasks
            setSelectedMilestoneTask={setSelectedMilestoneTask}
          />
        </>
      );
    }
  };

  return (
    <View style={{ padding: 10, bottom: 10 }}>
      {renderContent()}
    </View>
  );
};

export default MissionMilestone;
