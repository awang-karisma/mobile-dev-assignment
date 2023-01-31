import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

export default function ItemCard({ image, title, desc, price, onAction }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: image }} />
      <Card.Content style={styles.content}>
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodyMedium">{desc}</Text>
      </Card.Content>
      <Card.Actions>
        <Text>${price}</Text>
        <Button onPress={() => onAction()}>Order Now</Button>
      </Card.Actions>
    </Card>
  );
}
ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onAction: PropTypes.func,
};
ItemCard.defaultProps = {
  onAction: () => {},
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
