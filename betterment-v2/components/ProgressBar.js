import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function ProgressBar({ radius, strokeWidth, progress }) {
  const diameter = radius * 2;
  const angle = progress * 360;
  const startX = radius + radius * Math.cos((angle * Math.PI) / 180);
  const startY = radius + radius * Math.sin((angle * Math.PI) / 180);

  const largeArcFlag = angle > 180 ? 1 : 0;

  const pathData = `
    M ${radius},${radius}
    L ${radius},${strokeWidth / 2}
    A ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 ${largeArcFlag},1 ${startX},${startY}
    Z
  `;

  return (
    <View>
      <Svg width={diameter} height={diameter}>
        {/* Background circle */}
        <Path
          d={`M ${radius},${radius} m 0,-${radius - strokeWidth / 2} a ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 1,0 0,${2 * (radius - strokeWidth / 2)} a ${radius - strokeWidth / 2},${radius - strokeWidth / 2} 0 1,0 0,-${2 * (radius - strokeWidth / 2)}`}
          stroke="#e4e4e4"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress arc */}
        <Path
          d={pathData}
          stroke="#007AFF"
          strokeWidth={strokeWidth}
          fill="none"
        />
      </Svg>
    </View>
  );
};