import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { IMG, ROUTES } from '../utils';
import { RootStackParamList } from '../navigations/type';

// ✅ navigation type
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

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
        source={{ uri: IMG.LOGO3 }}
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
          <Text style={{ fontSize: 40, color: 'white' }}>
            GO TO PROFILE
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;