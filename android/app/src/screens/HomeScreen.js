import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMG, ROUTES } from '../utils';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'red',
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
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 40, color: 'white' }}>GO TO PROFILE</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;