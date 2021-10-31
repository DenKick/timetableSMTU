import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import Home from './src/pages/Home/Home';
import Group from './src/pages/Group/Group';
import About from './src/pages/About';

import {DarkTheme, LightTheme} from './src/themes/Themes';

import {RootStackParamTypes} from './src/types/types';

const RootStack = createNativeStackNavigator<RootStackParamTypes>();

const App = () => {
  const scheme = useColorScheme() === 'dark';

  const options: NativeStackNavigationOptions = {
    headerShown: false,
  };

  const backgroundStyle = {
    height: '100%',
  };

  return (
    <NavigationContainer theme={scheme ? DarkTheme : LightTheme}>
      <StatusBar barStyle={scheme ? 'light-content' : 'dark-content'} />
      <SafeAreaView style={backgroundStyle}>
        <RootStack.Navigator initialRouteName={'Home'}>
          <RootStack.Screen name="Home" component={Home} options={options} />
          <RootStack.Screen name="Group" component={Group} options={options} />
          <RootStack.Screen name="About" component={About} options={options} />
        </RootStack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
