import React from 'react';
import {Image, Text, View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import colors from '../utils/colors';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Main')}
      onDone={() => navigation.navigate('Main')}
      pages={[
        {
          backgroundColor: colors.purpleLight,
          image: <Image source={require('../utils/images/onboarding1.png')} />,
          title: 'Welcome to COVID ALERTS!',
          subtitle: 'Help us to prevent the spread.',
        },
        {
          backgroundColor: colors.purpleMedium,
          image: <Image source={require('../utils/images/onboarding2.png')} />,
          title: 'Stay safe!',
          subtitle: 'Protect yourself and others.',
        },
        {
          backgroundColor: colors.purpleDark,
          image: <Image source={require('../utils/images/onboarding3.png')} />,
          title: 'COVID is global!',
          subtitle:
            'We are all in this together and we will get through this, together.',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
