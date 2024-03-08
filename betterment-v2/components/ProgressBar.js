import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import { Colors } from '../constants/Colors';

export default function ProgressBar({ radius, strokeWidth, progress }) {
  const diameter = radius * 2;
  const circumference = diameter * Math.PI;
  const progressValue = progress * circumference;
  const strokeDashoffset = circumference - progressValue + 48;

  return (
    <View style={{ alignItems: 'center' }}>
      <Svg width={diameter} height={diameter} fill="transparent">
        {/* Background circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={Colors.accent2}
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke={Colors.secondary}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </Svg>
    </View>
  );
};
