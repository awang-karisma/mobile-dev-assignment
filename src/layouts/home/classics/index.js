import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { ItemCard } from '../../../components';
import items from '../../../constants';
import { add as cartAdd } from '../../../store/cart/slice';
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
          onOrderNow={() => {
            dispatch(
              notificationUpdate({ title: item.title, image: item.image, price: item.price })
            );
          }}
          onAddCart={() => {
            dispatch(
              cartAdd({ title: item.title, image: item.image, price: item.price, id: item.id })
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
