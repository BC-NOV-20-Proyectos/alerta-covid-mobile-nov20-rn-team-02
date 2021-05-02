import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import constans from '../utils/constans';
import Button from '../components/Button';
import styles from '../utils/styles/Test/testDetailsStyles';
import DatePicker from 'react-native-date-picker';
import ComboBox from 'react-native-combobox';
import colors from '../utils/colors';
import {MainFunctions} from '../utils/functions/mainFunctions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const TestResultsDetails = ({navigation}) => {
  function navigate() {
    if (selectedValue === 0) {
      navigation.navigate('RegisterSymptoms', {covidResult: true});
    } else {
      //Mandar incidencia
      AsyncStorage.getItem('ScannedPlaces').then((res) => {
        var idArray = [];
        var incidentObj = {
          symptomatic: false,
          covid_positive: false,
          places: [],
        };
        var tenDayAgo = new Date(MainFunctions.getFixedDate());
        tenDayAgo.setDate(tenDayAgo.getDate() - 10);
        const placeToFilter = JSON.parse(res);
        const invertedFilter = placeToFilter.reverse();
        for (var i = 0; i < invertedFilter.length; i++) {
          var placeDate = new Date(invertedFilter[i].date);
          if (placeDate >= tenDayAgo) {
            idArray.push(invertedFilter[i].idPlace);
          }
        }
        incidentObj.places = idArray;

        AsyncStorage.getItem('userToken').then((res) => {
          axios({
            headers: {
              Authorization: 'Bearer ' + res,
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'post',
            url: 'https://hidden-cliffs-21927.herokuapp.com/api/incident',
            data: incidentObj,
          }).then((response) => {
            if (response.data.error === false) {
              Alert.alert(
                'Incident Sents',
                'Alert Incident sent succesfully.',
                [
                  {
                    text: 'Cancel',
                    onPress: () => navigation.navigate('Main'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => navigation.navigate('Main')},
                ],
              );
            } else {
              Alert.alert('Incident Error', 'This alert was not sent', [
                {
                  text: 'Cancel',
                  onPress: () => navigation.navigate('Main'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => navigation.navigate('Main')},
              ]);
            }
          });
        });
      });
    }
  }
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('data');
  const [show, setShow] = useState(false);

  const [selectedValue, setSelectedValue] = useState('');

  const values = ['Positive', 'Negative'];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{constans.testResult}</Text>
      <Text style={styles.subTitle}>{constans.selectResult}</Text>
      <View style={styles.conatinerCombo}>
        <ComboBox
          style={styles.ComboBox}
          values={values}
          onValueSelect={setSelectedValue}
          textColor={colors.purpleDark}
          defaultValue={'Negative'}
          backgroundColor={colors.purpleLight}
        />
      </View>
      <Text style={styles.subTitle}>{constans.testDate}</Text>
      <DatePicker
        style={styles.picker}
        date={date}
        textColor={colors.datePickTestColor}
        androidVariant={'nativeAndroid'}
      />

      <Button text={constans.done} onP={navigate} />
    </View>
  );
};

export default TestResultsDetails;
