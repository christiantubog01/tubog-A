import React, {
  useEffect,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import { useSelector } from 'react-redux';

// ✅ ORDER TYPE
interface Order {
  id: number;
  total: number;
  status: string;
  created_at: string;
}

const OrdersScreen: React.FC = () => {

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ TOKEN
  const token = useSelector(
    (state: any) => state.auth.data?.token
  );

  // ✅ FETCH ORDERS
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {

    try {

      const response = await fetch(
        'https://anita-fresh-delights-web-dev-1-production.up.railway.app/api/orders',
        {
          method: 'GET',
          headers: {
            Accept: 'application/ld+json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(
        'ORDERS STATUS:',
        response.status
      );

      const data = await response.json();

      console.log(
        'ORDERS DATA:',
        data
      );

      // ✅ API PLATFORM COLLECTION
      setOrders(data.member ?? []);

    } catch (error) {

      console.log(
        'FETCH ORDERS ERROR:',
        error
      );

    } finally {

      setLoading(false);

    }
  };

  // ✅ STATUS COLORS
  const getStatusColor = (status: string) => {

    switch (status) {

      case 'Completed':
        return '#16a34a';

      case 'Pending':
        return '#f59e0b';

      case 'Processing':
        return '#2563eb';

      case 'Cancelled':
        return '#dc2626';

      default:
        return '#64748b';
    }
  };

  // ✅ FORMAT DATE
  const formatDate = (date: string) => {
    return new Date(date)
      .toLocaleDateString();
  };

  // ✅ RENDER CARD
  const renderItem = ({
    item,
  }: {
    item: Order;
  }) => (

    <View style={styles.card}>

      <View style={styles.rowBetween}>

        <Text style={styles.orderId}>
          Order #{item.id}
        </Text>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor:
                getStatusColor(
                  item.status
                ),
            },
          ]}
        >
          <Text style={styles.statusText}>
            {item.status}
          </Text>

        </View>

      </View>

      <Text style={styles.total}>
        ₱ {item.total.toFixed(2)}
      </Text>

      <Text style={styles.date}>
        Ordered on{' '}
        {formatDate(item.created_at)}
      </Text>

    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#f1f5f9"
      />

      {/* HEADER */}
      <View style={styles.header}>

        <Text style={styles.headerTitle}>
          My Orders
        </Text>

        <Text style={styles.headerSubtitle}>
          View your recent purchases
        </Text>

      </View>

      {/* ORDERS */}
      <FlatList
        data={orders}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },

  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  headerSubtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 5,
  },

  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 15,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 4,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  orderId: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  statusBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },

  total: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 15,
  },

  date: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 8,
  },

});