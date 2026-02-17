// utils
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';

import AuthNav from './AuthNav'

export default () => {
  const isDarkmode = useColorScheme() === 'dark';

    useEffect( () => {
      if (Platform.OS === 'android') {
        StatusBar.setBarStyle('dark-content',true);
      }
    }, [isDarkmode]);

  return (
    <NavigationContainer>
      <AuthNav />
    </NavigationContainer>
  );
};