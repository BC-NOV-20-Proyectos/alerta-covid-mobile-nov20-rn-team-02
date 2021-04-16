import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import colors from '../utils/colors';
import constans from '../utils/constans';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Main')}
      onDone={() => navigation.navigate('Main')}
      pages={[
        {
          backgroundColor: colors.purpleMedium,
          image: <Image source={require('../utils/images/onboarding1.png')} />,
          title: constans.welcome,
          subtitle: constans.subtitleOne,
        },
        {
          backgroundColor: colors.purpleLight,
          image: <Image source={require('../utils/images/onboarding2.png')} />,
          title: constans.staySafe,
          subtitle: constans.subtitleTwo,
        },
        {
          backgroundColor: colors.purpleDark,
          image: <Image source={require('../utils/images/onboarding3.png')} />,
          title: constans.covidGlobal,
          subtitle: constans.subtitleThree,
        },
      ]}
    />
  );
};

export default OnboardingScreen;
