import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils';
import React from 'react'

const Register = () => {
    const navigation = useNavigation();

  return (
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    
    <Text style={{color: 'blue', fontSize: 30}}>Welcome!</Text>
        <TextInput placeholder=' Username'style={{
        marginTop: 5,
        backgroundColor: '#cccccc',
        width: '80%',
        borderRadius: 10
        }}
        />
        <TextInput placeholder=' Password'  secureTextEntry={true} style={{
        marginTop: 5,
        backgroundColor: '#cccccc',
        width: '80%',
        borderRadius: 10
        }}/>
        <TextInput placeholder=' First Name'style={{
        marginTop: 20,
        backgroundColor: '#cccccc',
        width: '80%',
        borderRadius: 10
        }}
        />
        <TextInput placeholder=' Last Name'style={{
        marginTop: 5,
        backgroundColor: '#cccccc',
        width: '80%',
        borderRadius: 10
        }}
        />        

      <TouchableOpacity
        onPress={() => {
          
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

      <TouchableOpacity onPress={() =>{navigation.navigate(ROUTES.LOGIN)}}>
        <Text style={{color: 'blue'}}>Login</Text>
      </TouchableOpacity>
      

    </View>
  )
}

export default Register