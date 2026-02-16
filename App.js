import React from 'react';
import { View } from 'react-native';

import AppNav from './android/app/src/navigations'; //note sometimes it doesnt read the directory ./android/app/src this is the original

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppNav/>
    </View>
  );
};

export default App;



// import HomeScreen from './android/app/src/screens/ProfileScreen';