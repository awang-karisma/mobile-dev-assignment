import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Classics from './classics';
import Latest from './latest';
import Upcoming from './upcoming';

const Tab = createMaterialTopTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Classics" component={Classics} />
      <Tab.Screen name="Latest Release" component={Latest} />
      <Tab.Screen name="Upcoming" component={Upcoming} />
    </Tab.Navigator>
  );
}
