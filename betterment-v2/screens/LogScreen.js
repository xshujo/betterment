// This component is a screen that displays the user's health entries //

import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/core";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar } from 'react-native-calendars';

import { fetchLogData } from "../utils/logUtils";
import { Colors } from "../constants/Colors";
import LogEntry from "../components/LogEntry";
import ClearDataButton from "../components/temp/ClearAllData";

export default function LogScreen() {
  const [logData, setLogData] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Function to get the formatted date string
  const getTitleDate = () => {
    const selectedDateObj = new Date(selectedDate);
    selectedDateObj.setDate(selectedDateObj.getDate() + 1);
    const options = { weekday: 'long' };
    const dayOfWeek = selectedDateObj.toLocaleDateString('en-US', options);
    const dayOfMonth = selectedDateObj.getDate();
    const ordinalIndicator = getOrdinalIndicator(dayOfMonth);
    const monthAbbreviation = selectedDateObj.toLocaleDateString('en-US', { month: 'short' });
    const year = selectedDateObj.getFullYear();
    return {
      dayOfWeek,
      formattedDate: `${monthAbbreviation} ${dayOfMonth}${ordinalIndicator}, ${year}`
    };
  };

  // Function to get the ordinal indicator for the day of the month
  const getOrdinalIndicator = (day) => {
    if (day > 10 && day < 20) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

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
  }

  const currentDate = new Date().toISOString().split('T')[0];

  // Filter log data for the selected date
  const filteredLogData = logData.filter(entry => entry.formType[1] !== 'sleep' ? entry.dateCreated === selectedDate : entry.wakeDate === selectedDate);

  const groupedLogData = {};

  filteredLogData.forEach((entry) => {
    const category = entry.formType[1];
    if (!groupedLogData[category]) {
      groupedLogData[category] = {};
    }

    if (category === 'meal') {
      const mealType = entry.mealType;
      if (!groupedLogData[category][mealType]) {
        groupedLogData[category][mealType] = [];
      }
      groupedLogData[category][mealType].push(entry);
    } else {
      if (!groupedLogData[category]['entries']) {
        groupedLogData[category]['entries'] = [];
      }
      groupedLogData[category]['entries'].push(entry);
    }
  });

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* <ClearDataButton /> */}
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.dateContainer}>
          <Text style={styles.dayText}>{getTitleDate().dayOfWeek}</Text>
          <Text style={styles.dateText}>{getTitleDate().formattedDate}</Text>
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

        {Object.keys(groupedLogData).length === 0 ? (
          <View style={styles.noEntriesContainer}>
            <Text style={styles.noEntriesText}>No entries recorded</Text>
          </View>
        ) : (
          Object.keys(groupedLogData).map((category, index) => (
            <LinearGradient key={index} colors={['#FED3D4', '#EEFFF3']} start={[0, 1]} end={[1, 0]} style={{ borderRadius: 16, padding: 16 }}>
              <View>
                <Text style={styles.categoryText}>{category}</Text>
                {/* Display exercise count for activity category */}
                {category === 'activity' && (
                  <Text style={styles.countText}>Exercise count: {groupedLogData[category].entries.length}</Text>
                )}
                {/* Display meal count for meal category */}
                {category === 'meal' && (
                  <View>
                    <Text style={styles.countText}>Meal count: {Object.keys(groupedLogData[category]).length}</Text>
                    {Object.keys(groupedLogData[category]).map((mealType, idx) => (
                      <View key={idx}>
                        <Text style={styles.boldText}>{mealType}</Text>
                        <View style={styles.logContainer}>
                          {groupedLogData[category][mealType].map((entry, entryIdx) => (
                            <LogEntry key={entryIdx} category={category} entry={entry} />
                          ))}
                        </View>
                      </View>
                    ))}
                  </View>
                )}
                {/* Display entries for other categories */}
                {category !== 'meal' && (
                  <View style={styles.logContainer}>
                    {groupedLogData[category].entries.map((entry, entryIdx) => (
                      <LogEntry key={entryIdx} category={category} entry={entry} />
                    ))}
                  </View>
                )}
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
  },
  boldText: {
    fontFamily: 'Nunito-Bold',
    textTransform: 'capitalize',
    marginTop: 8,
    paddingVertical: 8,
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