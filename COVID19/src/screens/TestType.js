import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import constans from '../utils/constans';
import ButtonMain from '../components/ButtonMain';

import styles from '../utils/styles/TestTypeStyles/TestTypeStyles';

const TestType = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}> {constans.testType} </Text>
      <ButtonMain
        captionButton={constans.viralTest}
        // img={require('../utils/images/covidsitos.png')}
        onPush={() => {
          navigation.navigate('TestDetails');
        }}
      />
      <ButtonMain
        captionButton={constans.bodyTest}
        // img={require('../utils/images/prueba-de-sangre.png')}
        onPush={() => {
          navigation.navigate('TestDetails');
        }}
      />
    </View>
  );
};

export default TestType;
