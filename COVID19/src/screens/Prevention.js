import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import colors from '../utils/colors';
import constans from '../utils/constans';

const Prevention = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Main')}
      onDone={() => navigation.navigate('Main')}
      pages={[
        {
          backgroundColor: colors.purpleMedium,
          image: <Image source={require('../utils/images/mask.png')} />,
          title: constans.wearMask,
        },
        {
          backgroundColor: colors.purpleLight,
          image: <Image source={require('../utils/images/hands.png')} />,
          title: constans.washHands,
        },
        {
          backgroundColor: colors.purpleDark,
          image: <Image source={require('../utils/images/distance.png')} />,
          title: constans.keepDistance,
        },
        {
          backgroundColor: colors.purpleMedium,
          image: <Image source={require('../utils/images/sanitizer.png')} />,
          title: constans.handSanitizer,
        },
        {
          backgroundColor: colors.purpleLight,
          image: <Image source={require('../utils/images/stay-home.png')} />,
          title: constans.stayHome,
        },
        {
          backgroundColor: colors.purpleDark,
          image: <Image source={require('../utils/images/gloves.png')} />,
          title: constans.wearGloves,
        },
      ]}
    />
  );
};

export default Prevention;
