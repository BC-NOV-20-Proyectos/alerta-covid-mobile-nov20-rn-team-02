import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import styles from '../utils/styles/symptomsStyles/symptomsStyles';

const CustomCheck = ({name}) => {
  const [check, isCheck] = useState(false);
  return (
    <CheckBox
      checkedColor="#5A4DCC"
      uncheckedColor="#5A4DCC"
      textStyle={styles.text}
      title={name}
      checked={check}
      onPress={() => {
        isCheck(!check);
        if (check === false) {
          console.log(name);
        } else {
          console.log('No checkeado');
        }
      }}
    />
  );
};

export default CustomCheck;
