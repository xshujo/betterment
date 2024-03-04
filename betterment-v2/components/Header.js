// This component displays the name of the current screen //

import React from "react";

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "../constants/Colors";

import GoBackIcon from "../assets/images/icon.png";
import SettingsIcon from "../assets/images/icon.png";

export default function Header({ screen }) {
  return (
    <LinearGradient colors={['#FFFFFF', '#F7B2B9']}
      start={[0, 1]}
      end={[0, 0]}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={GoBackIcon} style={{ width: 16, height: 16, }} />
        </TouchableOpacity>
        <Text style={{ color: Colors.accent3, fontFamily: 'Nunito-Bold' }}>{screen}</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={SettingsIcon} style={{ width: 16, height: 16, }} />
        </TouchableOpacity>
      </View>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconContainer: {
    padding: 24
  }
});