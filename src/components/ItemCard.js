import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, IconButton, Text } from 'react-native-paper';

export default function ItemCard({ image, title, desc, price, onOrderNow, onAddCart }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: image }} />
      <Card.Content style={styles.content}>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{desc}</Text>
      </Card.Content>
      <Card.Actions>
        <Text>${price}</Text>
        <Button onPress={() => onOrderNow()}>Order Now</Button>
        <IconButton mode="outlined" onPress={() => onAddCart()} icon="cart-plus" />
      </Card.Actions>
    </Card>
  );
}
ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onOrderNow: PropTypes.func,
  onAddCart: PropTypes.func,
};
ItemCard.defaultProps = {
  onOrderNow: () => {},
  onAddCart: () => {},
};
const styles = StyleSheet.create({
  main: {
    padding: 12,
  },
  content: {
    marginVertical: 6,
  },
  price: {
    textAlign: 'left',
  },
  card: {
    marginBottom: 24,
  },
});
