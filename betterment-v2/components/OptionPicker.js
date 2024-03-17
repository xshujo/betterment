import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Colors } from "../constants/Colors";

export default function OptionPicker({ options, onSelect, currentUnit }) {
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    // Set the selected unit when the currentUnit prop changes
    setSelectedUnit(currentUnit);
  }, [currentUnit]);

  const [selectedUnit, setSelectedUnit] = useState(currentUnit);

  function handleToggleOptions() {
    setShowOptions(!showOptions);
  }

  function handleOptionPress(option) {
    onSelect(option);
    setSelectedUnit(option);
    setShowOptions(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.inputContainer} onPress={handleToggleOptions}>
        <Text style={styles.inputText}>{selectedUnit} {showOptions ? <Text style={{ fontSize: 12 }}>&#x25B2;</Text> : <Text style={{ fontSize: 12 }}>&#x25BC;</Text>}</Text>
      </TouchableOpacity>
      {showOptions && (
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity key={index} onPress={() => handleOptionPress(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 75,
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: 'center',
  },
  inputText: {
    fontFamily: 'Nunito-Bold',
  },
  arrow: {
    fontSize: 12,
  },
  optionsContainer: {
    width: '100%',
    borderTopColor: Colors.primary,
    borderTopWidth: 1,
    padding: 16,
    gap: 16,
  },
  optionText: {
    fontFamily: 'Nunito-Bold',
  }
});