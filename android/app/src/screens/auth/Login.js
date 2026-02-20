import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { ROUTES } from '../../utils';
// import { TextInput } from 'react-native-gesture-handler';             for some reason this doesnt work but its better to use this


const Login = () => {
    const [emailaddress, setemailaddress] = useState('');
    const [password, setpassword] = useState('');

    const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'blue', fontSize: 30}}>Welcome!</Text>
      <TextInput placeholder=' Email Address' value={val => setemailaddress(val)} style={{
        backgroundColor: '#cccccc',
        width: '80%',
        borderRadius: 10
      }}
      />
      <TextInput placeholder=' Password' secureTextEntry={true} style={{
        marginTop: 5,
        backgroundColor: '#cccccc',
        width: '80%',
        borderRadius: 10
      }}/>
      <TouchableOpacity      
        onPress={() => {
          if (emailaddress === '' || password === '') {
            Alert.alert('Invalid Credentials', 'Check username and password.');
            return;
          };
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