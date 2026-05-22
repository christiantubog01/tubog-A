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

  // ✅ QUANTITY STATE
  const [quantities, setQuantities] = useState<{
    [key: number]: number;
  }>({});

  const dispatch = useDispatch();

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

  // ✅ ADD TO CART WITH QUANTITY
  const addToCart = (product: Product) => {

    const quantity = quantities[product.id] || 1;

    dispatch({
      type: ADD_TO_CART,
      payload: {
        ...product,
        quantity,
      },
    });
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Products
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) =>
          item.id.toString()
        }

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

            <Text style={styles.name}>
              {item.product_name}
            </Text>

            <Text style={styles.description}>
              {item.product_description}
            </Text>

            <Text style={styles.price}>
              ₱{item.price}
            </Text>

            {/* ✅ QUANTITY BUTTONS */}

            <View style={styles.quantityContainer}>

              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() =>
                  setQuantities((prev) => ({
                    ...prev,
                    [item.id]: Math.max(
                      1,
                      (prev[item.id] || 1) - 1
                    ),
                  }))
                }
              >
                <Text style={styles.qtyButtonText}>
                  -
                </Text>
              </TouchableOpacity>

              <Text style={styles.qtyText}>
                {quantities[item.id] || 1}
              </Text>

              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() =>
                  setQuantities((prev) => ({
                    ...prev,
                    [item.id]:
                      (prev[item.id] || 1) + 1,
                  }))
                }
              >
                <Text style={styles.qtyButtonText}>
                  +
                </Text>
              </TouchableOpacity>

            </View>

            {/* ✅ ADD TO CART BUTTON */}

            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>
                Add To Cart
              </Text>
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

  // ✅ QUANTITY STYLES

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  qtyButton: {
    backgroundColor: '#2563eb',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  qtyButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },

  qtyText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },

  // ✅ ADD TO CART BUTTON

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