import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';

import {
  GoogleSignin,
  GoogleSigninButton,
  isSuccessResponse,
} from '@react-native-google-signin/google-signin';

import { configureGoogle, signInWithGoogle } from '../../utils/googleAuth';

import { ROUTES } from '../../utils';
import { RootStackParamList } from '../../types/type';

import CustomTextInput from '../../components/CustomTextInput';
import { authLogin } from '../../app/reducers/auth';
import { RESET_USER_LOGIN, AUTH_SUCCESS } from '../../app/actions';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const Login: React.FC = () => {

  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const { data, isError } = useSelector((state: any) => state.auth);

  useEffect(() => {
    configureGoogle();
  }, []);

  // 🔥 GOOGLE LOGIN
const handleGoogleLogin = async () => {
  try {
    // 👇 FORCE account selection (add this)
    await GoogleSignin.signOut();

    const response = await signInWithGoogle();

    if (!response) {
      console.log('Login cancelled');
      return;
    }

    if (!isSuccessResponse(response)) {
      console.log('Google sign-in failed');
      return;
    }

    const idToken = response.data?.idToken;

    if (!idToken) {
      console.log('No idToken found');
      return;
    }

    console.log('GOOGLE ID TOKEN:', idToken);

    const res = await fetch('http://10.202.177.159:8000/api/google-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ idToken }),
    });

    const result = await res.json();
    console.log('JWT RESPONSE:', result);

    dispatch({
      type: AUTH_SUCCESS,
      payload: result,
    });

  } catch (err) {
    console.log('Google login error:', err);
  }
};

  useEffect(() => {
    if (isError) {
      navigation.navigate(ROUTES.LOGIN_ERROR);
      dispatch({ type: RESET_USER_LOGIN });
    }

    // ⚠️ OPTIONAL: you can remove this if navigation is fully Redux-driven
    if (data?.token) {
      navigation.navigate(ROUTES.HOME);
    }
  }, [isError, data, navigation, dispatch]);

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }}>

      <Text style={{ color: 'blue', fontSize: 30, marginBottom: 20 }}>
        Login
      </Text>

      <CustomTextInput
        placeholder="Enter Student ID"
        value={studentId}
        onChangeText={setStudentId}
      />

      <CustomTextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* 🔵 NORMAL LOGIN */}
      <TouchableOpacity
        style={{ marginTop: 15, width: '25%' }}
        onPress={() => {
          if (!studentId || !password) {
            Alert.alert('Please input credentials');
            return;
          }

          dispatch(authLogin({ student_id: studentId, password }));
        }}
      >
        <View style={{
          backgroundColor: 'blue',
          padding: 12,
          borderRadius: 10,
          alignItems: 'center',
        }}>
          <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
        </View>
      </TouchableOpacity>

      {/* 🔥 GOOGLE LOGIN */}
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleLogin}
      />

      <Text style={{ marginTop: 20 }}>
        Don't have an account?
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
        <Text style={{ color: 'blue', marginTop: 5 }}>
          Register
        </Text>
      </TouchableOpacity>

    </View>
  );
};

export default Login;