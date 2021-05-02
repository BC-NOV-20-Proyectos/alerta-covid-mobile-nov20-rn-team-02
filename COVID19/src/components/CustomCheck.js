import React, {useState} from 'react';
import {CheckBox} from 'react-native-elements';
import styles from '../utils/styles/symptomsStyles/symptomsStyles';
import colors from '../utils/colors';

const CustomCheck = ({name, callbackCounterPlus, callbackCounterLess}) => {
  const [check, isCheck] = useState(false);
  return (
    <CheckBox
      checkedColor={colors.greenLight}
      uncheckedColor={colors.greenDark}
      textStyle={styles.text}
      title={name}
      checked={check}
      onPress={() => {
        isCheck(!check);
        if (check === false) {
          callbackCounterPlus();
        } else {
          callbackCounterLess();
        }
      }}
    />
  );
};

export default CustomCheck;
