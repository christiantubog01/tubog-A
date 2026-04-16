import React from 'react';
import { Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { IMG } from '../utils';
import CustomButton from '../components/CustomButton';
import { RESET_USER_LOGIN } from '../app/actions';

// 🔹 Proper state type
interface AuthState {
  data: {
    user?: string;
  } | null;
  isLoading: boolean;
  isError: boolean;
}

interface RootState {
  auth: AuthState;
}

const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: RootState) => state.auth);

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
        source={{ uri: IMG.LOGO }}
        style={{ width: 200, height: 200 }}
      />

      <Text style={{ fontSize: 40 }}>ProfileScreen</Text>

      {/* ✅ USER INFO */}
      <Text style={{ fontSize: 20, marginTop: 10 }}>
        Username: {data?.user ?? 'No user logged in'}
      </Text>

      {/* LOGOUT */}
      <CustomButton
        title="LOGOUT"
        onPress={() => dispatch({ type: RESET_USER_LOGIN })}
        style={{ backgroundColor: 'red', marginTop: 20 }}
      />
    </View>
  );
};

export default ProfileScreen;