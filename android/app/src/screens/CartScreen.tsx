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

  const cartItems = useSelector(
    (state: any) => state.cart.cartItems,
  );

  const total = cartItems.reduce(
    (sum: number, item: any) =>
      sum + item.price,
    0,
  );

  const handleCheckout = async () => {

    try {

      Alert.alert(
        'Checkout Successful'
      );

      dispatch({
        type: CLEAR_CART,
      });

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        My Cart
      </Text>

      <FlatList
        data={cartItems}
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