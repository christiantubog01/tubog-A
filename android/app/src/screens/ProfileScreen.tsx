import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { IMG } from '../utils';
import CustomButton from '../components/CustomButton';
import { RESET_USER_LOGIN } from '../app/actions';

interface User {
  username: string;
  email: string;
  roles: string[];
  verified: boolean;
}

interface AuthData {
  token: string;
  user: User;
}

interface AuthState {
  data: AuthData | null;
  isLoading: boolean;
  isError: boolean;
}

interface RootState {
  auth: AuthState;
}

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(
    (state: RootState) => state.auth,
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          My Profile
        </Text>

        <Text style={styles.headerSubtitle}>
          Account Information
        </Text>
      </View>

      {/* PROFILE CARD */}
      <View style={styles.card}>

        {/* PROFILE IMAGE */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: IMG.LOGO1 }}
            style={styles.profileImage}
          />
        </View>

        {/* USERNAME */}
        <Text style={styles.username}>
          {data?.user.username ?? 'No User'}
        </Text>

        {/* EMAIL */}
        <Text style={styles.email}>
          {data?.user.email ?? 'No Email'}
        </Text>

        {/* VERIFIED BADGE */}
        <View
          style={[
            styles.badge,
            {
              backgroundColor: data?.user.verified
                ? '#dcfce7'
                : '#fee2e2',
            },
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              {
                color: data?.user.verified
                  ? '#166534'
                  : '#991b1b',
              },
            ]}
          >
            {data?.user.verified
              ? 'Verified Account'
              : 'Not Verified'}
          </Text>
        </View>

        {/* LOGOUT BUTTON */}
        <CustomButton
          title="Logout"
          onPress={() =>
            dispatch({ type: RESET_USER_LOGIN })
          }
          style={styles.logoutButton}
          textStyle={styles.logoutText}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  headerSubtitle: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 5,
  },

  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 25,
    alignItems: 'center',

    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  imageContainer: {
    backgroundColor: '#f8fafc',
    padding: 15,
    borderRadius: 100,
    marginBottom: 20,
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },

  username: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  email: {
    fontSize: 16,
    color: '#64748b',
    marginTop: 5,
    marginBottom: 15,
  },

  badge: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginBottom: 25,
  },

  badgeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  infoContainer: {
    width: '100%',
    backgroundColor: '#f8fafc',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  infoLabel: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 5,
  },

  infoValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
  },

  token: {
    fontSize: 12,
    color: '#334155',
  },

  logoutButton: {
    width: '100%',
    backgroundColor: '#dc2626',
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 15,
  },

  logoutText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});