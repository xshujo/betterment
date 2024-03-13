// This component is a screen that displays the user's health entries //

import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/core";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar } from 'react-native-calendars'; // Import calendar picker

import { fetchLogData } from "../utils/logUtils";
import { Colors } from "../constants/Colors";
import LogEntry from "../components/LogEntry";

export default function LogScreen() {
  const [logData, setLogData] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const data = await fetchLogData();
          setLogData(data);
        } catch (error) {
          console.error('Error fetching log data:', error);
        }
      };
      fetchData();
    }, [])
  );

  function toggleShowCalendar() {
    setShowCalendar(!showCalendar);
  }

  // Function to handle day press event
  function handleDayPress(day) {
    setSelectedDate(day.dateString);
    setShowCalendar(false);
  };

  // Get current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.dateContainer}>
          <Text style={styles.dayText}>Selected Date</Text>
          <Text style={styles.dateText}>{selectedDate}</Text>
        </View>
        <TouchableOpacity style={styles.showCalendarContainer} onPress={toggleShowCalendar}>
          <Text style={styles.showCalendarText}>
            {selectedDate === currentDate ? "Today" : selectedDate}
            {showCalendar ? <Text style={{ fontSize: 12 }}> &#x25B2;</Text> : <Text style={{ fontSize: 12 }}> &#x25BC;</Text>}
          </Text>
        </TouchableOpacity>
        {showCalendar && (
          <View style={styles.dateContainer}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{ [selectedDate]: { selected: true } }}
              maxDate={currentDate}
            />
          </View>
        )}

        {logData.length === 0 ? (
          <View style={styles.noEntriesContainer}>
            <Text style={styles.noEntriesText}>No entries recorded</Text>
          </View>
        ) : (
          logData.map((entry, index) => (
            <LinearGradient key={index} colors={['#FED3D4', '#EEFFF3']} start={[0, 1]} end={[1, 0]} style={{ borderRadius: 16 }}>
              <View style={styles.logContainer}>
                {/* Render details based on the structure of your AsyncStorage data */}
                <Text style={styles.categoryText}>{entry.formType[1]}</Text>
                {/* Additional details specific to each entry */}
                {/* Render LogEntry component */}
                <LogEntry key={entry.id} category={entry.formType[1]} entry={entry} />
              </View>
            </LinearGradient>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent1,
    padding: 24,
    alignItems: 'stretch',
    gap: 16,
  },
  dateContainer: {
    gap: 12,
  },
  dayText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 36,
    color: Colors.accent2,
  },
  dateText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: Colors.accent3,
  },
  showCalendarContainer: {
    backgroundColor: Colors.secondary,
    padding: 16,
    borderRadius: 48,
    alignSelf: 'flex-start',
  },
  showCalendarText: {
    fontFamily: 'Nunito-Bold',
    color: Colors.accent1,
  },
  logContainer: {
    borderRadius: 16,
    padding: 16,
    gap: 12
  },
  categoryText: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  countText: {
    fontFamily: 'Nunito-Light',
    fontSize: 14,
    marginBottom: 8,
  },
  noEntriesContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noEntriesText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: Colors.accent2,
    textAlign: 'center',
  },
});