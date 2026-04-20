import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import AuthNav from './AuthNav';
import MainNav from './MainNav';
import { RootState } from '../app/reducers/store'; // 🔥 add this

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  const { data } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBarStyle('dark-content', true);
    }
  }, [isDarkMode]);

  console.log(data);

  return (
    <NavigationContainer>
      {data && data.token ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
};