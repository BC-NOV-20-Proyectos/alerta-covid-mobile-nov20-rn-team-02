import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/loginAuthStyles';
import Button from '../components/Button';
import Input from '../components/Input';
import constans from '../utils/constans';
import {NavigationHelpersContext} from '@react-navigation/core';
import axios from 'axios';

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
      ///riveragmariam@gmail.com
      //1g5717l
      const url =
        constans.urlAPI +
        '?user[email]=' +
        formData.usuario +
        '&user[password]=' +
        formData.contrasenia;
      //Aquí colocar antes de enviar los datos del formulario
      axios
        .post(url)
        .then((res) => {
          if (res.data.id !== null) {
            navigation.navigate('Main');
          } else {
            alert('Login failed!');
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //adicionar el token con la respuesta del ws
    } else {
      console.log('Error con el formulario');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Text style={styles.txtTitle}>{constans.login}</Text>
        <Input
          iconName="user"
          style={styles.input}
          placeholderTxt={constans.email}
          onChangeInput={(e) => onChange(e, 'usuario')}
        />
        <Input
          iconName="lock"
          style={styles.input}
          placeholderTxt={constans.pw}
          onChangeInput={(e) => onChange(e, 'contrasenia')}
        />
        <Button text={constans.login} onP={putLoginOk} />
      </View>
      <Text style={styles.textForgotPW}> {constans.forgotPW} </Text>
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
