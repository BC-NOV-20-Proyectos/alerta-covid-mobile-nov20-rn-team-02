import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import Locations from '../screens/Locations';
import Login from '../screens/Login';
import Main from '../screens/main';
import RegisterSymptoms from '../screens/registerSymptoms';
import TestType from '../screens/TestType';
import TestDetails from '../screens/TestDetails';
import Camera from '../screens/Camera';

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
        <AppStack.Screen name="TestType" component={TestType} />
        <AppStack.Screen name="TestDetails" component={TestDetails} />
        <AppStack.Screen name="Camera" component={Camera} />
        <AppStack.Screen name="Locations" component={Locations} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
