import React from 'react';
import {View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from '../utils/styles/cameraStyles/cameraStyles';
import constans from '../utils/constans';
import Icon from 'react-native-vector-icons/Ionicons';

const onSuccess = (text) => {
  alert(
    `The place is ${text.data} and the coordenates are ${text.bounds.origin[0].x}`,
  );
};

const Camera = () => {
  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        topContent={<Text style={styles.title}>{constans.qrTitle}</Text>}
        bottomContent={
          <Icon
            name="md-scan-outline"
            color="white"
            size={300}
            style={styles.icon}
          />
        }
      />
    </View>
  );
};

export default Camera;
