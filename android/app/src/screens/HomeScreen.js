import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMG, ROUTES } from '../utils';

import { useDispatch } from 'react-redux';
import { USER_LOGOUT } from '../app/actions';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
        source={{
          uri: IMG.LOGO3,
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ fontSize: 20 }}>HomeScreen</Text>


      <TouchableOpacity
        onPress={() => {
          navigation.navigate(ROUTES.PROFILE);
        }}
      >
        <View
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 40, color: 'white' }}>GO TO PROFILE</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
  onPress={() => {
    dispatch({ type: USER_LOGOUT });
  }}
>
  <View
    style={{
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 10,
      marginTop: 20,
    }}
  >
    <Text style={{ fontSize: 20, color: 'white' }}>LOGOUT</Text>
  </View>
</TouchableOpacity>
    </View>

    
  );
};

export default HomeScreen;