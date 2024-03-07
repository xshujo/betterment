import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function ProgressBar({ radius, strokeWidth, progress }) {
  const diameter = radius * 2;
  const circumference = diameter * Math.PI;
  const progressValue = progress * circumference;

  return (
    <View>
      <Svg width={diameter} height={diameter}>
        {/* Background circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#e4e4e4"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#007AFF"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progressValue}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};