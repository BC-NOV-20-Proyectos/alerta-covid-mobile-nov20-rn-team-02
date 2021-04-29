import React from 'react';
import {View, Text, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from '../utils/styles/cameraStyles/cameraStyles';
import constans from '../utils/constans';
import Icon from 'react-native-vector-icons/Ionicons';
import {MainFunctions} from '../utils/functions/mainFunctions';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Camera = ({navigation}) => {
  const onSuccess = async (text) => {
    console.log(text);
    const arrayPlaces = text.data.split('|');
    var placeObject = {
      id: 0,
      idPlace: arrayPlaces[0],
      namePlace: arrayPlaces[1],
      date: MainFunctions.getFixedDate(),
    };

    var scannedPlacesJSON = await AsyncStorage.getItem('ScannedPlaces');
    var sannedPlacesWhitoutString = JSON.parse(scannedPlacesJSON);

    placeObject.id = sannedPlacesWhitoutString.length + 1;

    sannedPlacesWhitoutString.push(placeObject);

    AsyncStorage.setItem(
      'ScannedPlaces',
      JSON.stringify(sannedPlacesWhitoutString),
    );

    Alert.alert(
      'Place Correctly Scanned',
      'You are in' + ' ' + placeObject.namePlace,
      [
        {
          text: 'Cancel',
          onPress: () => navigation.navigate('Main'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate('Main')},
      ],
    );
  };

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
