import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ROUTES } from '../../utils';
import { RootStackParamList } from '../../navigations/type';

import CustomTextInput from '../../components/CustomTextInput';

// ✅ navigation type
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Register'
>;

const Register: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  // optional states (recommended)
  const [studentId, setStudentId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'blue', fontSize: 30 }}>Welcome!</Text>

      <CustomTextInput
        placeholder="Enter StudentID"
        value={studentId}
        onChangeText={setStudentId}
      />

      <CustomTextInput
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <CustomTextInput
        placeholder="Enter Firstname"
        value={firstName}
        onChangeText={setFirstName}
      />

      <CustomTextInput
        placeholder="Enter Lastname"
        value={lastName}
        onChangeText={setLastName}
      />

      <TouchableOpacity
        onPress={() => {
          // TODO: register logic
          console.log(studentId, password, firstName, lastName);
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
          <Text style={{ fontSize: 20, color: 'white' }}>Register</Text>
        </View>
      </TouchableOpacity>

      <Text>Already have an Account?</Text>

      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.LOGIN)}>
        <Text style={{ color: 'blue' }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;