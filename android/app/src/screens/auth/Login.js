import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { ROUTES } from '../../utils';
import CustomTextInput from '../../components/CustomTextInput';
import { authLogin } from '../../app/reducers/auth';
import { RESET_USER_LOGIN } from '../../app/actions';

const Login = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useSelector(state => state.auth);

  useEffect(() => {
    if (isError) {

      navigation.navigate(ROUTES.LOGIN_ERROR); 
      dispatch({ type: RESET_USER_LOGIN });
    }

    if (data) {
      navigation.navigate(ROUTES.HOME);
    }
  }, [isError, data]);

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
        style={{ marginTop: 15, width: '100%' }}
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