import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Text, useTheme } from 'react-native-paper';

export default function Setting() {
  const theme = useTheme();
  const calendarTheme = {
    backgroundColor: theme.colors.background,
    calendarBackground: theme.colors.background,

    monthTextColor: theme.colors.primary,
    textSectionTitleColor: theme.colors.primary,
    dayTextColor: theme.colors.primary,

    todayTextColor: theme.colors.onPrimary,
    todayBackgroundColor: theme.colors.onPrimaryContainer,

    selectedDayTextColor: theme.colors.primary,
    selectedDayBackgroundColor: theme.colors.primaryContainer,

    textDisabledColor: theme.dark ? '#777777' : '#cccccc',

    arrowColor: theme.colors.primary,
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: 'bold',
  };
  const [selectedDate, setSelectedDate] = useState();

  const todayDate = new Date();
  const timezoneOffset = todayDate.getTimezoneOffset() * 60 * 1000;
  const disabledDate = new Date(todayDate - timezoneOffset).toISOString().split('T')[0];

  return (
    <View style={styles.container}>
      <Calendar
        theme={calendarTheme}
        style={styles.calendar}
        onDayPress={(day) => setSelectedDate(day)}
        markedDates={selectedDate ? { [selectedDate.dateString]: { selected: true } } : {}}
        minDate={disabledDate}
      />
      {selectedDate && (
        <Text style={styles.text}>
          Selected Date : {new Date(selectedDate.timestamp).toDateString()}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  calendar: {
    width: '100%',
  },
  text: {
    margin: 12,
    textAlign: 'center',
  },
});
