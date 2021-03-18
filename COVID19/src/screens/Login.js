import React from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/loginAuthStyles';
import Button from '../components/Button';
import Input from '../components/Input';
import constans from '../utils/constans';
import { NavigationHelpersContext } from '@react-navigation/core';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.txtTitle}>{constans.login}</Text>
        <Input iconName="user" style={styles.input} placeholderTxt={constans.email}/>
        <Input iconName="lock" style={styles.input} placeholderTxt={constans.pw}/>
        <Button text={constans.login} onP={()=>{navigation.navigate('Main')}}/>             
      </View>
      <Text style={styles.textForgotPW}> {constans.forgotPW} </Text>
    </View>
  );
};

export default Login;


