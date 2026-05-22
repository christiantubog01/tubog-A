import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { ADD_TO_CART } from '../app/actions/cart';

interface Product {
  id: number;
  product_name: string;
  product_description: string;
  image: string;
  price: number;
}

const ProductsScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  // ✅ GET TOKEN FROM REDUX
  const token = useSelector(
    (state: any) => state.auth.data?.token
  );

  useEffect(() => {
    fetchProducts();
  }, [token]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://anita-fresh-delights-web-dev-1-production.up.railway.app/api/products',
        {
          method: 'GET',
          headers: {
            Accept: 'application/ld+json',
            'Content-Type': 'application/json',

            // 🔥 IMPORTANT FIX
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('STATUS:', response.status);

      const data = await response.json();
      console.log('FULL DATA:', data);

      setProducts(data?.member ?? []);
    } catch (error) {
      console.log('FETCH ERROR:', error);
    }
  };

  const addToCart = (product: Product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{
                uri:
                  'https://anita-fresh-delights-web-dev-1-production.up.railway.app/products/' +
                  item.image,
              }}
              style={styles.image}
            />

            <Text style={styles.name}>{item.product_name}</Text>
            <Text style={styles.description}>
              {item.product_description}
            </Text>
            <Text style={styles.price}>₱{item.price}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0f172a',
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,

    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#0f172a',
  },

  description: {
    color: '#64748b',
    marginTop: 5,
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#16a34a',
  },

  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

});