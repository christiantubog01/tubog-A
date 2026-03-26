import { Image, Text, View, TouchableOpacity } from 'react-native';
import { IMG } from '../utils';
import CustomButton from '../components/CustomButton';

import { useDispatch, useSelector } from 'react-redux';
import { RESET_USER_LOGIN } from '../app/actions';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.auth); 

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
          uri: IMG.LOGO,
        }}
        style={{ width: 200, height: 200 }}
      />

      <Text style={{ fontSize: 40 }}>ProfileScreen</Text>

      {/* ✅ SHOW USERNAME */}
      <Text style={{ fontSize: 20, marginTop: 10 }}>
        Username: {data?.user}
      </Text>

      {/* LOGOUT */}
<CustomButton
  title="LOGOUT"
  onPress={() => dispatch({ type: RESET_USER_LOGIN })}
  style={{ backgroundColor: 'red', marginTop: 20 }}
/>
    </View>
  );
};

export default ProfileScreen;