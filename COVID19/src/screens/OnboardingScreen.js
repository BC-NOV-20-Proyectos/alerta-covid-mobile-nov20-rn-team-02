import React from 'react';
import {Image, Text, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import colors from '../utils/colors';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: colors.purpleLight,
          image: <Image source={require('../utils/images/onboarding1.png')} />,
          title: 'Welcome to COVID19 Alerts',
          subtitle: 'Texto chido aqui!!',
        },
        {
          backgroundColor: colors.purpleMedium,
          image: <Image source={require('../utils/images/onboarding2.png')} />,
          title: 'Covid19',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: colors.purpleDark,
          image: <Image source={require('../utils/images/onboarding3.png')} />,
          title: 'COVID19 is global',
          subtitle: 'We are all in this together!',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
