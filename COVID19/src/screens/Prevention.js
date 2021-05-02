import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import colors from '../utils/colors';
import constans from '../utils/constans';
import styles from '../utils/styles/preventionStyles/preventionStyles';

const Prevention = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Main')}
      onDone={() => navigation.navigate('Main')}
      pages={[
        {
          backgroundColor: colors.purpleMedium,
          image: (
            <Image
              style={styles.imageSize}
              source={require('../utils/images/mask.png')}
            />
          ),
          title: constans.wearMask,
          subtitle: constans.wearMaskSub,
        },
        {
          backgroundColor: colors.purpleLight,
          image: (
            <Image
              style={styles.imageSize}
              source={require('../utils/images/hands.png')}
            />
          ),
          title: constans.washHands,
          subtitle: constans.washHandsSub,
        },
        {
          backgroundColor: colors.purpleDark,
          image: (
            <Image
              style={styles.imageSize}
              source={require('../utils/images/distance.png')}
            />
          ),
          title: constans.keepDistance,
          subtitle: constans.keepDistanceSub,
        },
        {
          backgroundColor: colors.purpleMedium,
          image: (
            <Image
              style={styles.imageSize}
              source={require('../utils/images/sanitizer.png')}
            />
          ),
          title: constans.handSanitizer,
          subtitle: constans.handSanitizerSub,
        },
        {
          backgroundColor: colors.purpleLight,
          image: (
            <Image
              style={styles.imageSize}
              source={require('../utils/images/stay-home.png')}
            />
          ),
          title: constans.stayHome,
          subtitle: constans.stayHomeSub,
        },
      ]}
    />
  );
};

export default Prevention;
