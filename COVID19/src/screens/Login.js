import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/loginAuthStyles';
import Button from '../components/Button';
import Input from '../components/Input';
import constans from '../utils/constans';
import axios from 'axios';
import services from '../utils/functions/services';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [formData, setFormData] = useState(defaultValue());
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };
  const pleaseRecovery = () => {
    try {
      const urlRecovery = constans.urlService + 'recovery/password';

      services.passRecovery(formData.usuario, urlRecovery).then((resData) => {
        if (resData === constans.recoveryOKDataCode) {
          alert(constans.recoverySuccessful);
        } else {
          alert(constans.errorRecovery);
        }
      });
    } catch (e) {
      alert(e.toString());
    }
  };
  const putLoginOk = () => {
    if (
      (formData.usuario || formData.contrasenia) &&
      (formData.usuario !== '' || formData.contrasenia !== '')
    ) {
      const url =
        constans.urlService +
        'user/sign_in?api_user[email]=' +
        formData.usuario +
        '&api_user[password]=' +
        formData.contrasenia;
      axios.post(url).then((res) => {
        if (res.data.token !== null) {
          AsyncStorage.setItem(constans.asyncTokenVar, res.data.token);
          navigation.navigate('Main');
        } else {
          alert(constans.errorLoginFail);
        }
      });
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image
          style={styles.welcomeImg}
          source={require('../utils/images/login.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.txtTitle}>{constans.loginGreeting}</Text>
        <Input
          iconName="user"
          style={styles.inputContainer}
          placeholderTxt={constans.email}
          onChangeInput={(e) => onChange(e, constans.typeUser)}
        />
        <Input
          iconName="lock"
          style={styles.inputContainer}
          placeholderTxt={constans.pw}
          onChangeInput={(e) => onChange(e, constans.typePass)}
        />
        <Button text={constans.login} onP={putLoginOk} />
        <TouchableOpacity onPress={pleaseRecovery}>
          <Text style={styles.textForgotPW}> {constans.forgotPW} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
function defaultValue() {
  return {
    usuario: '',
    contrasenia: '',
  };
}
export default Login;
