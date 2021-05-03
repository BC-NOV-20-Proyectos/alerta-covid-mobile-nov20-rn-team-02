import React from 'react';
import {View, TextInput} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/loginAuthStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../utils/colors';

const Input = ({placeholderTxt, iconName, onChangeInput}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon
        name={iconName}
        color={colors.white}
        size={25}
        style={styles.iconStyle}
      />
      <TextInput
        style={styles.inputInput}
        placeholder={placeholderTxt}
        secureTextEntry={placeholderTxt === 'Password' && true}
        placeholderTextColor={colors.white}
        onChange={onChangeInput}
      />
    </View>
  );
};

export default Input;
