import React from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import {
  REMOVE_FROM_CART,
  CLEAR_CART,
} from '../app/actions/cart';

const CartScreen: React.FC = () => {

  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);
  const token = useSelector((state: any) => state.auth.data?.token);

  const total = items.reduce(
    (sum: number, item: any) =>
      sum + item.price,
    0,
  );

const handleCheckout = async () => {
  try {
    

    // 1. calculate total
const total = items.reduce(
  (sum: number, item: any) =>
    sum + item.price * item.quantity,
  0
);

    // 2. CREATE ORDER
const orderRes = await fetch(
  'https://anita-fresh-delights-web-dev-1-production.up.railway.app/api/orders',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/ld+json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      total,
      status: 'Pending',
    }),
  }
);

console.log('ORDER STATUS:', orderRes.status);

const orderText = await orderRes.text();
console.log('ORDER RAW RESPONSE:', orderText);

    const order = await orderRes.json();

    // 3. CREATE ORDER ITEMS
    for (const item of items) {
      await fetch(
        'https://anita-fresh-delights-web-dev-1-production.up.railway.app/api/order_items',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/ld+json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            order_ref: order['@id'], // IMPORTANT
            product: `/api/products/${item.id}`,
            quantity: item.quantity,
            price: item.price,
            subtotal: item.price * item.quantity,
          }),
        }
      );
    }

    // 4. CLEAR CART
    dispatch({ type: CLEAR_CART });

    Alert.alert('Success', 'Order placed successfully!');
  } catch (error) {
    console.log(error);
    Alert.alert('Error', 'Checkout failed');
  }
};

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        My Cart
      </Text>

      <FlatList
        data={items}
        keyExtractor={(_, index) =>
          index.toString()
        }
        renderItem={({ item, index }) => (

          <View style={styles.card}>

            <Text style={styles.name}>
              {item.product_name}
            </Text>

            <Text style={styles.price}>
              ₱{item.price}
            </Text>

            <TouchableOpacity
              onPress={() =>
                dispatch({
                  type: REMOVE_FROM_CART,
                  payload: index,
                })
              }
            >
              <Text style={styles.remove}>
                Remove
              </Text>
            </TouchableOpacity>

          </View>

        )}
      />

      <Text style={styles.total}>
        Total: ₱{total}
      </Text>

      <TouchableOpacity
        style={styles.checkoutButton}
        onPress={handleCheckout}
      >
        <Text style={styles.checkoutText}>
          Checkout
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  price: {
    color: '#16a34a',
    marginTop: 5,
  },

  remove: {
    color: 'red',
    marginTop: 10,
  },

  total: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },

  checkoutButton: {
    backgroundColor: '#16a34a',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },

  checkoutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});