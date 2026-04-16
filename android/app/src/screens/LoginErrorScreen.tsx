import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ROUTES } from '../utils';
import { RootStackParamList } from '../navigations/type';

// ✅ navigation type
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginError'
>;

const LoginErrorScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f8d7da',
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
          color: '#721c24',
          marginBottom: 20,
        }}
      >
        Login Failed
      </Text>

      <Text
        style={{
          fontSize: 18,
          color: '#721c24',
          textAlign: 'center',
          marginBottom: 30,
        }}
      >
        The student ID or password you entered is incorrect. Please try again.
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.LOGIN)}
        style={{
          backgroundColor: '#721c24',
          paddingVertical: 12,
          paddingHorizontal: 30,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginErrorScreen;