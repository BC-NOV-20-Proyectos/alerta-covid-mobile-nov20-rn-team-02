import React from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../utils/styles/mainStyle';
import ButtonMain from '../components/ButtonMain';
import Input from '../components/Input';
import constans from '../utils/constans';
import { NavigationHelpersContext } from '@react-navigation/core';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.vQuestion}>
          <Text style ={styles.textQuestion}>{constans.mainQuest}</Text>
        </View>
        <View style={styles.optionsUp}>
          <ButtonMain text='Register Symptoms' img={require('../utils/images/symptoms.png')} onP={()=>{navigation.navigate('Login')}}/>
          <ButtonMain text='Register Labs' img={require('../utils/images/Labs.png')} onP={()=>{navigation.navigate('Login')}}/>
        </View>
        <View style={styles.optionsDown}>
          <ButtonMain text='See Locations' img={require('../utils/images/locations.png')} onP={()=>{navigation.navigate('Login')}}/>
        </View>
      </View>
    </View>
  );
};

export default Main;

