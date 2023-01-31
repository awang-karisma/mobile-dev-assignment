import React, { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function Setting() {
  const [selectedDate, setSelectedDate] = useState();

  const todayDate = new Date();
  const timezoneOffset = todayDate.getTimezoneOffset() * 60 * 1000;
  const disabledDate = new Date(todayDate - timezoneOffset).toISOString().split('T')[0];

  return (
    <View style={styles.container}>
      <Calendar
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
