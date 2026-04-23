import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';

import { ROUTES } from '../../utils';
import { RootStackParamList } from '../../types/type';

import CustomTextInput from '../../components/CustomTextInput';
import { authLogin } from '../../app/reducers/auth';
import { RESET_USER_LOGIN } from '../../app/actions';

// 🔹 navigation type
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

const Login: React.FC = () => {
  const [studentId, setStudentId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      navigation.navigate(ROUTES.LOGIN_ERROR);
      dispatch({ type: RESET_USER_LOGIN });
    }

    if (data) {
      navigation.navigate(ROUTES.HOME);
    }
  }, [isError, data, navigation, dispatch]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Text style={{ color: 'blue', fontSize: 30, marginBottom: 20 }}>Login</Text>

      <CustomTextInput
        placeholder="Enter Student ID"
        value={studentId}
        onChangeText={setStudentId}
      />

      <CustomTextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

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
        <View
          style={{
            backgroundColor: 'blue',
            padding: 12,
            borderRadius: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>Login</Text>
        </View>
      </TouchableOpacity>

      <Text style={{ marginTop: 20 }}>Don't have an account?</Text>

      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
        <Text style={{ color: 'blue', marginTop: 5 }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;