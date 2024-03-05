// This component is the home screen. It displays the user's stats of the day or any chosen day //

import React from "react";
import { Text, View } from "react-native";
import ProgressBar from "../components/ProgressBar";

export default function HomeScreen() {
  return (
    <View>
      {/* Top stat */}
      <View>
        <View>
          {/* The progress */}
          {/* <ProgressBar radius={50} strokeWidth={10} progress={0.7} /> */}
          {/* The stat */}
          <View>
            <Text>8750</Text>
            <Text>steps</Text>
          </View>
        </View>

        <Text>1250 steps remaining</Text>
      </View>
      {/* Stats */}
      <View>
        <View>
          <Text>Activity</Text>
          <Text>Stats</Text>
        </View>
        <View>
          <Text>Activity</Text>
          <Text>Stats</Text>
        </View>
        <View>
          <Text>Activity</Text>
          <Text>Stats</Text>
        </View>
        <View>
          <Text>Activity</Text>
          <Text>Stats</Text>
        </View>
      </View>

    </View>
  );
}