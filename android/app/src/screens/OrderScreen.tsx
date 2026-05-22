import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';

// ✅ ORDER TYPE
interface Order {
  id: number;
  total: number;
  status: string;
  created_at: string;
}

// ✅ SAMPLE DATA
const orders: Order[] = [
  {
    id: 1,
    total: 1110,
    status: 'Completed',
    created_at: '2026-05-21T06:11:42+00:00',
  },
  {
    id: 2,
    total: 970,
    status: 'Pending',
    created_at: '2026-05-22T01:06:15+00:00',
  },
  {
    id: 3,
    total: 1350,
    status: 'Pending',
    created_at: '2026-05-22T01:08:37+00:00',
  },
  {
    id: 4,
    total: 525,
    status: 'Processing',
    created_at: '2026-05-22T01:10:14+00:00',
  },
  {
    id: 5,
    total: 190,
    status: 'Pending',
    created_at: '2026-05-22T01:11:21+00:00',
  },
  {
    id: 6,
    total: 80,
    status: 'Cancelled',
    created_at: '2026-05-22T01:12:41+00:00',
  },
];

const OrdersScreen: React.FC = () => {

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
    return new Date(date).toLocaleDateString();
  };

  // ✅ RENDER ORDER CARD
  const renderItem = ({ item }: { item: Order }) => (
    <View style={styles.card}>

      {/* TOP */}
      <View style={styles.rowBetween}>
        <Text style={styles.orderId}>
          Order #{item.id}
        </Text>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: getStatusColor(item.status),
            },
          ]}
        >
          <Text style={styles.statusText}>
            {item.status}
          </Text>
        </View>
      </View>

      {/* TOTAL */}
      <Text style={styles.total}>
        ₱ {item.total.toFixed(2)}
      </Text>

      {/* DATE */}
      <Text style={styles.date}>
        Ordered on {formatDate(item.created_at)}
      </Text>
    </View>
  );

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

      {/* LIST */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
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