import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/loginAuthStyles';

const Button = ({text, onP}) => {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={onP}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
