import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import Login from '../screens/Login';

const AppStack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen
          name="OnboardingScreen"
          component={OnboardingScreen}
          options={{tabBarLabel: 'COVID19 Alert'}}
        />
        <AppStack.Screen name="Login" component={Login} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
