import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import ItemCard from '../../../components';
import items from '../../../constants';
import { update as notificationUpdate } from '../../../store/notification/slice';

export default function Classics() {
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.main}>
      {items.classic.map((item) => (
        <ItemCard
          image={item.image}
          title={item.title}
          desc={item.desc}
          price={item.price}
          key={item.id}
          onAction={() => {
            dispatch(
              notificationUpdate({ title: item.title, image: item.image, price: item.price })
            );
          }}
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
