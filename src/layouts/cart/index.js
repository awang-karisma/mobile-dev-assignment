import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { CartCard } from '../../components';
import {
  decrease as cartDecrease,
  increase as cartIncrease,
  remove as cartRemove,
} from '../../store/cart/slice';

export default function Cart() {
  const theme = useTheme();
  const cartData = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const sumPrice =
    Object.keys(cartData).length > 0
      ? Object.keys(cartData).reduce(
          (oldVal, curVal) => oldVal + parseFloat(cartData[curVal].price) * cartData[curVal].count,
          0
        )
      : 0;
  const sumQty =
    Object.keys(cartData).length > 0
      ? Object.keys(cartData).reduce((oldVal, curVal) => oldVal + cartData[curVal].count, 0)
      : 0;
  return (
    <>
      <ScrollView style={{ margin: 12, marginBottom: 72 }}>
        {Object.keys(cartData).map((item) => (
          <CartCard
            key={cartData[item].id}
            image={cartData[item].image}
            title={cartData[item].title}
            qty={cartData[item].count.toString()}
            price={cartData[item].price}
            totalPrice={(parseFloat(cartData[item].price) * cartData[item].count).toString()}
            onDelete={() => dispatch(cartRemove(cartData[item].id))}
            onIncQty={() => dispatch(cartIncrease(cartData[item].id))}
            onDecQty={() => dispatch(cartDecrease(cartData[item].id))}
          />
        ))}
      </ScrollView>
      <View style={{ ...styles.cartSummaryContainer, backgroundColor: theme.colors.background }}>
        <View>
          <Text variant="titleLarge">Subtotal ({sumQty} items)</Text>
          <Text variant="bodyMedium">$ {sumPrice}</Text>
        </View>
        <View>
          <Button mode="contained" disabled={sumQty === 0}>
            Checkout
          </Button>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cartSummaryContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
});
