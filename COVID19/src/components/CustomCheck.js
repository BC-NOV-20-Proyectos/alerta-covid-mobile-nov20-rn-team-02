import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import styles from '../utils/styles/symptomsStyles/symptomsStyles';
import colors from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomCheck = ({name, callbackCounterPlus, callbackCounterLess}) => {
  const algo = AsyncStorage.getItem('incident').then((res) => {
    return res;
  });
  const [check, isCheck] = useState(false);
  return (
    <CheckBox
      checkedColor={colors.isCheckedColor}
      uncheckedColor={colors.isUncheckedColor}
      textStyle={styles.text}
      title={name}
      checked={check}
      onPress={() => {
        isCheck(!check);
        if (check === false) {
          callbackCounterPlus();
          //console.log(name);
        } else {
          callbackCounterLess();
          //console.log('No checkeado');
        }
      }}
    />
  );
};

export default CustomCheck;
