import React from 'react';
import { Text } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Placeholder() {
  return <Text>Test only</Text>;
}

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Classics" component={Placeholder} />
      <Tab.Screen name="Latest Release" component={Placeholder} />
      <Tab.Screen name="Upcoming" component={Placeholder} />
    </Tab.Navigator>
  );
}
