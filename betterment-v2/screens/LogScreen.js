// This component is a screen that displays the user's health entries //

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from "../constants/Colors";
import { Calendar } from 'react-native-calendars'; // Import calendar picker

import LogEntry from "../components/LogEntry";
import logData from '../assets/data/logEntries.json';

export default function LogScreen() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Default to today's date

  function toggleShowCalendar() {
    setShowCalendar(!showCalendar);
  }

  // Function to handle day press event
  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    setShowCalendar(false);
  };

  // Filter log entries by selected date
  const filteredEntries = logData.map(categoryData => ({
    ...categoryData,
    entries: categoryData.entries.filter(entry => {
      const entryDate = new Date(entry.dateCreated);
      const selectedDateObj = new Date(selectedDate);
      return (
        entryDate.getUTCFullYear() === selectedDateObj.getUTCFullYear() &&
        entryDate.getUTCMonth() === selectedDateObj.getUTCMonth() &&
        entryDate.getUTCDate() === selectedDateObj.getUTCDate()
      );
    })
  })).filter(categoryData => categoryData.entries.length > 0);

  // Calculate exercise count and meal count
  let exerciseCount = 0;
  let mealCount = 0;

  filteredEntries.forEach(categoryData => {
    const { category, entries } = categoryData;

    if (category === 'activity') {
      exerciseCount += entries.length;
    } else if (category === 'nutrition') {
      mealCount += new Set(entries.map(entry => entry.mealType)).size;
    }
  });

  // Get current date in "YYYY-MM-DD" format
  const currentDate = new Date().toISOString().split('T')[0];

  const formattedSelectedDate = new Date(selectedDate);
  const timeZoneOffset = formattedSelectedDate.getTimezoneOffset() * 60000; // Get time zone offset in milliseconds
  const adjustedSelectedDate = new Date(formattedSelectedDate.getTime() + timeZoneOffset);

  // Format selected date in "Sunday, Feb 25th, 2024" format
  const dayOfWeek = adjustedSelectedDate.toLocaleString('en-US', { weekday: 'long' });
  const month = adjustedSelectedDate.toLocaleString('en-US', { month: 'short' });
  const dayOfMonth = adjustedSelectedDate.getDate();
  const year = adjustedSelectedDate.getFullYear();
  const selectedDateDisplay = `${month} ${dayOfMonth}${getDaySuffix(dayOfMonth)}, ${year}`;

  // Format selected date in "dd/mm/yy" format
  const selectedDateSortBy = adjustedSelectedDate.toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '/');

  // Function to get day suffix (st, nd, rd, th)
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.dateContainer}>
          <Text style={styles.dayText}>{dayOfWeek}</Text>
          <Text style={styles.dateText}>{selectedDateDisplay}</Text>
        </View>
        <TouchableOpacity style={styles.showCalendarContainer} onPress={toggleShowCalendar}>
          <Text style={styles.showCalendarText}>
            {selectedDate === currentDate ? "Today" : selectedDateSortBy}
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

        {filteredEntries.map((categoryData) => {
          const { category, entries } = categoryData;

          return (
            <LinearGradient colors={['#FED3D4', '#EEFFF3']}
              start={[0, 1]}
              end={[1, 0]}
              style={{ borderRadius: 16 }}
              key={category}>
              <View style={styles.logContainer}>
                <Text style={styles.categoryText}>{category}</Text>
                {category === 'activity' && (<Text style={styles.countText}>Exercise count: {exerciseCount}</Text>)}
                {category === 'nutrition' && (<Text style={styles.countText}>Meal count: {mealCount}</Text>)}
                {entries.map((entry) => (
                  <LogEntry key={entry.eid} category={category} entry={entry} />
                ))}
              </View>
            </LinearGradient>
          );
        })}
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
});