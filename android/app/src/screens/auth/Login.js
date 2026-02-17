import { View, Text, TextInput, TouchableOpacity } from 'react-native'
// import { TextInput } from 'react-native-gesture-handler';             for some reason this doesnt work but its better to use this
import { ROUTES } from '../utils';

const Login = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'blue', fontSize: 30}}>Welcome!</Text>
      <TextInput placeholder='Email Address'style={{
        width: '80%',
        borderWidth: 1,
      }}
      />
      <TextInput placeholder='Password'  secureTextEntry={true} style={{
        width: '80%',
        borderWidth: 1,
      }}/>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.PROFILE);
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
          <Text style={{ fontSize: 30, color: 'white' }}>Login</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Login;