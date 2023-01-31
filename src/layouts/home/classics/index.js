import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ItemCard from '../../../components';
import items from '../../../constants';

export default function Classics() {
  return (
    <ScrollView style={styles.main}>
      {items.classic.map((item) => (
        <ItemCard
          image={item.image}
          title={item.title}
          desc={item.desc}
          price={item.price}
          key={item.id}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 12,
  },
});
