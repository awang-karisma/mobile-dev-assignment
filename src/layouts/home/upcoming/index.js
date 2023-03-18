import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import { ItemCard } from '../../../components';
import { add as cartAdd } from '../../../store/cart/slice';
import { update as notificationUpdate } from '../../../store/notification/slice';

export default function Upcoming() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch('https://dummyjson.com/products/category/furniture');
    const respData = await resp.json();
    setData(respData.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.main}>
      {loading && <ActivityIndicator size="large" animating />}
      {data &&
        data.map((item) => (
          <ItemCard
            image={item.images[0]}
            title={item.title}
            desc={item.description}
            price={item.price.toString()}
            key={item.id}
            onOrderNow={() => {
              dispatch(
                notificationUpdate({ title: item.title, image: item.images[0], price: item.price })
              );
            }}
            onAddCart={() => {
              dispatch(
                cartAdd({
                  title: item.title,
                  image: item.images[0],
                  price: item.price.toString(),
                  id: item.id,
                })
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
