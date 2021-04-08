import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import styles from '../utils/styles/mainStyle';

const ButtonMain = ({img, captionButton, onPush}) => {
  return (
    <View>
      <TouchableOpacity style={styles.mainButton} onPress={onPush}>
        <Image style={styles.btnLogo} source={img} />
      </TouchableOpacity>
      <Text style={styles.txtButton}>{captionButton}</Text>
    </View>
  );
};
export default ButtonMain;
