import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Home from '../pages/Home';

const {Navigator, Screen} = createStackNavigator();

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
