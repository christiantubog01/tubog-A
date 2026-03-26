import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { ROUTES } from '../../utils';
// import { TextInput } from 'react-native-gesture-handler';             for some reason this doesnt work but its better to use this
import CustomTextInput from '../../components/CustomTextInput';

import { authLogin } from '../../app/reducers/auth';
import { useDispatch } from 'react-redux';


const Login = () => {
    const [studentId, setstudentId] = useState('');
    const [password, setpassword] = useState('');

    const navigation = useNavigation();
    const dispatch = useDispatch();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'blue', fontSize: 30}}>Login</Text>
      {/* <Text>Student ID: {studentId}</Text>
      <Text>Password: {password}</Text> */}

      <CustomTextInput
        placeholder = {'Enter StudentID'}
        value={studentId}
        onChangeText={setstudentId}
      />
      <CustomTextInput
        placeholder = {'Enter Password'}
        value={password}
        onChangeText={setpassword}
        secureTextEntry={true}
      />


      <TouchableOpacity      
        onPress={async () => {
          if (studentId === '' || password === '') {
            Alert.alert('Please input Credentials.');
            return;
          }

          // await userLogin ({ studentId, password});
          dispatch(
            authLogin({
              student_id: studentId,
              password: password,
            }), 
          );         
        }}
      >
        <View
          style={{
            backgroundColor: 'blue',
            marginTop: 15,
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Login</Text>
        </View>
      </TouchableOpacity>

      <Text>Create an Account?</Text>

      <TouchableOpacity onPress={() =>{navigation.navigate(ROUTES.REGISTER)}}>
        <Text style={{color: 'blue'}}>Register</Text>
      </TouchableOpacity>
      

    </View>
    
  )
}

export default Login;