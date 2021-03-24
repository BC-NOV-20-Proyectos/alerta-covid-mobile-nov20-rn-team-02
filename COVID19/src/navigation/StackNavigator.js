import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import Locations from '../screens/Locations';
import Login from '../screens/Login';
import Main from '../screens/main';
import RegisterSymptoms from '../screens/registerSymptoms';

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
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="RegisterSymptoms" component={RegisterSymptoms} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
