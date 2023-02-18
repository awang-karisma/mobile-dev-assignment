import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';

export default function CartCard({
  image,
  title,
  price,
  totalPrice,
  qty,
  onDelete,
  onIncQty,
  onDecQty,
}) {
  return (
    <Card style={styles.card}>
      <Card.Content style={styles.contentrow}>
        {/* <Card.Cover source={{ uri: image }} /> */}
        <Image source={{ uri: image }} style={styles.itemImg} />
        <Card.Content style={styles.content}>
          <Text variant="titleLarge">{title}</Text>
          <Text variant="bodyMedium">$ {price}</Text>
        </Card.Content>
      </Card.Content>
      <Card.Actions>
        <Text>Sum: $ {totalPrice}</Text>
        <IconButton onPress={() => onDelete()} icon="trash-can-outline" />
        <IconButton mode="outlined" onPress={() => onDecQty()} icon="minus-circle" />
        <Text>Qty: {qty}</Text>
        <IconButton mode="outlined" onPress={() => onIncQty()} icon="plus-circle" />
      </Card.Actions>
    </Card>
  );
}
CartCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  qty: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
  onIncQty: PropTypes.func,
  onDecQty: PropTypes.func,
};
CartCard.defaultProps = {
  onDelete: () => {},
  onIncQty: () => {},
  onDecQty: () => {},
};
const styles = StyleSheet.create({
  main: {
    padding: 12,
  },
  itemImg: {
    width: 100,
    height: 100,
  },
  content: {
    marginVertical: 6,
  },
  contentrow: {
    marginVertical: 6,
    flexDirection: 'row',
  },
  card: {
    marginBottom: 24,
  },
});
