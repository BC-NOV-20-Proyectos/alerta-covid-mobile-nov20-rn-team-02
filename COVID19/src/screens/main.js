import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../utils/styles/mainStyle';
import ButtonMain from '../components/ButtonMain';
import Input from '../components/Input';
import constans from '../utils/constans';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.vQuestion}>
          <Text style={styles.textQuestion}>{constans.mainQuest}</Text>
        </View>
        <View style={styles.optionsUp}>
          <ButtonMain
            captionButton="Register Symptoms"
            img={require('../utils/images/symptoms.png')}
            onPush={() => {
              navigation.navigate('RegisterSymptoms');
            }}
          />
          <ButtonMain
            captionButton="Register Labs"
            img={require('../utils/images/Labs.png')}
            onPush={() => {
              navigation.navigate('Login');
            }}
          />
          <ButtonMain
            captionButton="See Locations"
            img={require('../utils/images/locations.png')}
            onPush={() => {
              navigation.navigate('Locations');
            }}
          />
        </View>
        <View style={styles.optionsDown}></View>
      </View>
    </View>
  );
};

export default Main;
