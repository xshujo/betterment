import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../constants/Colors";

export default function Input({ inputName, unit, charLimit }) {
  return (
    <View style={styles.categoryItem}>
      <Text style={styles.h3}>{inputName}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} keyboardType='numeric' placeholder='Value' maxLength={charLimit} />
        <View>
          <Text style={styles.h3}>{unit}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  h3: {
    fontFamily: 'Nunito-Bold'
  },
  categoryItem: {
    gap: 4,
  },
  inputContainer: {
    width: 144,
    backgroundColor: Colors.primaryLight,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  textInput: {
    width: 72,
    backgroundColor: Colors.accent1,
    fontFamily: 'Nunito-Regular',
    borderColor: Colors.primary,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderWidth: 1,
    paddingVertical: 8,
    paddingLeft: 16,
  },
});