import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { IMG, ROUTES } from '../utils';
import { RootStackParamList } from '../types/type';

// ✅ navigation type
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Welcome!
        </Text>

      </View>

      {/* LOGO CARD */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: IMG.LOGO1 }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* CONTENT CARD */}
      <View style={styles.card}>
        <Text style={styles.title}>
          Home Screen
        </Text>

        <Text style={styles.description}>
          Manage your account, check your profile,
          and explore the app features.
        </Text>

        {/* BUTTON */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => {
            navigation.navigate(ROUTES.PROFILE);
          }}
        >  
          <Text style={styles.buttonText}>
            Go To Profile
          </Text>
        </TouchableOpacity>
<TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate(ROUTES.PRODUCTS)}
>
  <Text style={styles.buttonText}>
    View Products
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={[
    styles.button,
    { backgroundColor: '#ea580c', marginTop: 15 }
  ]}
  onPress={() => navigation.navigate(ROUTES.CART)}
>
  <Text style={styles.buttonText}>
    My Cart
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={[
    styles.button,
    { backgroundColor: '#7c3aed', marginTop: 15 }
  ]}
  onPress={() => navigation.navigate(ROUTES.ORDERS)}
>
  <Text style={styles.buttonText}>
    My Orders
  </Text>
</TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7fb',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  header: {
    position: 'absolute',
    top: 60,
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e293b',
  },

  headerSubtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 5,
  },

  logoContainer: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 25,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    marginBottom: 30,
  },

  logo: {
    width: 180,
    height: 180,
  },

  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',

    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 25,
  },

  button: {
    width: '100%',
    backgroundColor: '#16a34a',
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ordersButton: {
  backgroundColor: '#2563eb',
  marginTop: 15,
},
});