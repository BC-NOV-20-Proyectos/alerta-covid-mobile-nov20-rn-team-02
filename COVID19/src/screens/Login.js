import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/loginAuthStyles';
import Button from '../components/Button';
import Input from '../components/Input';
import constans from '../utils/constans';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [formData, setFormData] = useState(defaultValue());
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };
  const putLoginOk = () => {
    if (
      (formData.usuario || formData.contrasenia) &&
      (formData.usuario !== '' || formData.contrasenia !== '')
    ) {
      const url =
        constans.urlAPI +
        //'?api_user[email]=gerzainnb@gmail.com' +
        '?api_user[email]=' +
        formData.usuario +
        '&api_user[password]=' +
        //'&api_user[password]=1g7u51a' +
        formData.contrasenia;
      axios
        .post(url)
        .then((res) => {
          if (res.data.token !== null) {
            //console.log(res.data.token);
            AsyncStorage.setItem('userToken', res.data.token);
            navigation.navigate('Main');
          } else {
            alert('Login failed!');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('Error con el formulario');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Image
          style={styles.img}
          source={require('../utils/images/stay-home.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.txtTitle}>{constans.loginGreeting}</Text>
        <Input
          iconName="user"
          style={styles.input}
          placeholderTxt={constans.email}
          onChangeInput={(e) => onChange(e, constans.typeUser)}
        />
        <Input
          iconName="lock"
          style={styles.input}
          placeholderTxt={constans.pw}
          onChangeInput={(e) => onChange(e, constans.typePass)}
        />
        <Button text={constans.login} onP={putLoginOk} />
        <Text style={styles.textForgotPW}> {constans.forgotPW} </Text>
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
