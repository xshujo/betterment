import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";
import { Colors } from "../constants/Colors";

export default function OptionPicker({ options, onSelect, defaultUnit }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(defaultUnit);

  function handleToggleOptions() {
    setShowOptions(!showOptions);
  }

  function handleOptionPress(option) {
    onSelect(option);
    setSelectedUnit(option);
    setShowOptions(false);
  };

  function handleOutsidePress() {
    setShowOptions(false);
  }

  return (
    <>
      <TouchableOpacity style={styles.inputContainer} onPress={handleToggleOptions}>
        <Text style={styles.inputText}>{selectedUnit}</Text>
      </TouchableOpacity>
      {showOptions && (
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.optionsContainer}>
            <ScrollView>
              {options.map((option, index) => (
                <TouchableOpacity style={styles.optionTextContainer} key={index} onPress={() => handleOptionPress(option)}>
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 72,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    fontFamily: 'Nunito-Medium',
  },
  optionsContainer: {
    width: 144,
    maxHeight: 150,
    backgroundColor: Colors.accent1,
    borderColor: Colors.accent2,
    borderWidth: 2,
    position: 'absolute',
    top: 51,
    left: 0,
  },
  optionTextContainer: {
    width: '100%',
    backgroundColor: Colors.accent1,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent2
  },
  optionText: {
    fontFamily: 'Nunito-Regular',
    paddingHorizontal: 16,
    paddingVertical: 8,
  }
});