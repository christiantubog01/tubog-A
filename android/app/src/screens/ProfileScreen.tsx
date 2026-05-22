import React from 'react';
import { Image, Text, View } from 'react-native';
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
    (state: RootState) => state.auth
  );

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'blue',
      }}
    >
      <Image
        source={{ uri: IMG.LOGO1 }}
        style={{ width: 200, height: 200 }}
      />

      <Text style={{ fontSize: 40 }}>
        ProfileScreen
      </Text>

      {/* ✅ USERNAME */}
      <Text style={{ fontSize: 20, marginTop: 10 }}>
        Username:{' '}
        {data?.user.username ?? 'No user logged in'}
      </Text>

      {/* ✅ EMAIL */}
      <Text style={{ fontSize: 18, marginTop: 5 }}>
        Email:{' '}
        {data?.user.email ?? 'No email'}
      </Text>

      {/* ✅ VERIFIED */}
      <Text style={{ fontSize: 18, marginTop: 5 }}>
        Verified:{' '}
        {data?.user.verified ? 'Yes' : 'No'}
      </Text>

      {/* LOGOUT */}
      <CustomButton
        title="LOGOUT"
        onPress={() =>
          dispatch({ type: RESET_USER_LOGIN })
        }
        style={{
          backgroundColor: 'red',
          marginTop: 20,
        }}
      />
    </View>
  );
};

export default ProfileScreen;