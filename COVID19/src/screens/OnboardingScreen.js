import React from 'react';
import {Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import colors from '../utils/colors';
import constans from '../utils/constans';
import styles from '../utils/styles/preventionStyles/preventionStyles';
import welcomeCarrousel from '../utils/images/welcome.png';
import maskImageCarrousel from '../utils/images/mask.png';
import handsImageCarrousel from '../utils/images/hands.png';
import distanceImageCarrousel from '../utils/images/distance.png';
import sanitizerImageCarrousel from '../utils/images/sanitizer.png';
import getVaccine from '../utils/images/getVaccine.png';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      pages={[
        {
          backgroundColor: colors.o1,
          image: <Image style={styles.welcomeImg} source={welcomeCarrousel} />,
          title: constans.welcome,
          subtitle: constans.welcomeGreeting,
        },
        {
          backgroundColor: colors.o2,
          image: <Image style={styles.wearMask} source={maskImageCarrousel} />,
          title: constans.wearMask,
          subtitle: constans.wearMaskSub,
        },
        {
          backgroundColor: colors.o3,
          image: (
            <Image style={styles.washHands} source={handsImageCarrousel} />
          ),
          title: constans.washHands,
          subtitle: constans.washHandsSub,
        },
        {
          backgroundColor: colors.o4,
          image: (
            <Image
              style={styles.keepDistance}
              source={distanceImageCarrousel}
            />
          ),
          title: constans.keepDistance,
          subtitle: constans.keepDistanceSub,
        },
        {
          backgroundColor: colors.o5,
          image: (
            <Image
              style={styles.handSanitizer}
              source={sanitizerImageCarrousel}
            />
          ),
          title: constans.handSanitizer,
          subtitle: constans.handSanitizerSub,
        },
        {
          backgroundColor: colors.o6,
          image: <Image style={styles.getVaccine} source={getVaccine} />,
          title: constans.getVaccine,
          subtitle: constans.getVaccineSub,
        },
      ]}
    />
  );
};

export default OnboardingScreen;
