import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import colors from '../utils/colors';
import constans from '../utils/constans';
import styles from '../utils/styles/preventionStyles/preventionStyles';
import maskImageCarrousel from '../utils/images/mask.png';
import handsImageCarrousel from '../utils/images/hands.png';
import distanceImageCarrousel from '../utils/images/distance.png';
import sanitizerImageCarrousel from '../utils/images/sanitizer.png';
import stayHomImageCarrousel from '../utils/images/stay-home.png';

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
              source={maskImageCarrousel}
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
              source={handsImageCarrousel}
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
              source={distanceImageCarrousel}
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
              source={require(sanitizerImageCarrousel}
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
              source={require(stayHomImageCarrousel}
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
