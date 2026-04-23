import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '../utils';
import { RootStackParamList } from '../types/type';

// screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import LoginErrorScreen from '../screens/LoginErrorScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.REGISTER}
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={ROUTES.LOGIN_ERROR}
        component={LoginErrorScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;