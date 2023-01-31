import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import ItemCard from '../../../components';

export default function Latest() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const resp = await fetch('https://dummyjson.com/products/category/home-decoration');
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
