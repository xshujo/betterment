import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import HomeIcon from "../assets/images/icon.png";
import LogIcon from "../assets/images/icon.png";
import AddIcon from "../assets/images/icon.png";
import DiaryIcon from "../assets/images/icon.png";
import ProfileIcon from "../assets/images/icon.png";
import { Colors } from "../constants/Colors";
import { Dim } from "../constants/Dimensions";

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={HomeIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={LogIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={AddIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={DiaryIcon} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={ProfileIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dim.vpWidth,
    backgroundColor: Colors.primary,
    paddingVertical: 20,
    paddingHorizontal: Dim.sideSpace,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  icon: {
    width: 24,
    height: 24,
  }
});