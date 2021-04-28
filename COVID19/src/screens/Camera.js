import React from 'react';
import {View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from '../utils/styles/cameraStyles/cameraStyles';
import constans from '../utils/constans';
import Icon from 'react-native-vector-icons/Ionicons';
import {MainFunctions} from '../utils/functions/mainFunctions';

import AsyncStorage from '@react-native-async-storage/async-storage';

const onSuccess = async (text, navigation) => {
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

  Alert.alert(`Place correctly scanned\nYou are in ${placeObject.namePlace}`, [
    {text: 'OK', onPress: () => navigation.navigate('Main')},
  ]);

  //alert(`Place correctly scanned\nYou are in ${placeObject.namePlace}`);
};

const Camera = ({navigation}) => {
  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess(navigation)}
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
