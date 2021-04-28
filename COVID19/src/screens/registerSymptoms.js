import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import CustomCheck from '../components/CustomCheck';
import Button from '../components/Button';
import constans from '../utils/constans';
import styles from '../utils/styles/symptomsStyles/symptomsStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainFunctions} from '../utils/functions/mainFunctions';
import axios from 'axios';

var count = 0;

const RegisterSymptoms = ({navigation}) => {
  function incidentAPI(object) {
    AsyncStorage.getItem('userToken').then((res) => {
      axios({
        headers: {Authorization: 'Bearer ' + res, Accept: 'application/json', 'Content-Type': 'application/json',},
        method: 'post',
        url: 'https://hidden-cliffs-21927.herokuapp.com/api/incident',
        data: object,
      }).then((response) => {
        if (response.data.error === false) {
          Alert.alert('Incident Sents', 'Alert Incident sent succesfully.', [
            {
              text: 'Cancel',
              onPress: () => navigation.navigate('Main'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => navigation.navigate('Main')},
          ]);
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
  }

  function sendIncident() {
    AsyncStorage.getItem('ScannedPlaces').then((res) => {
      var idArray = [];
      var incidentObj = {
        symptomatic: false,
        covid_positive: null,
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
      if (count > 0) {
        incidentObj.symptomatic = true;
      } else {
        incidentObj.symptomatic = false;
      }
      incidentAPI(incidentObj);
    });
  }

  function counterSymptomsPlus() {
    count = count + 1;
  }

  function counterSymptomsLess() {
    count = count - 1;
  }

  const renderItem = ({item}) => {
    return (
      <CustomCheck
        name={item.name}
        callbackCounterPlus={counterSymptomsPlus}
        callbackCounterLess={counterSymptomsLess}
      />
    );
  };

  return (
    <View style={styles.supermainContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{constans.QuestionSymptoms}</Text>
        <FlatList
          style={styles.listStyles}
          data={[
            {
              id: '1',
              name: 'Fever',
            },
            {
              id: '2',
              name: 'Cough',
            },
            {
              id: '3',
              name: 'Pain in chest with deep breaths',
            },
            {
              id: '4',
              name: 'Shortness of breaths',
            },
            {
              id: '5',
              name: 'Loss of smell',
            },
            {
              id: '6',
              name: 'Loss of taste',
            },
            {
              id: '7',
              name: 'Headache',
            },
            {
              id: '8',
              name: 'Fatigue of tiredness',
            },
            {
              id: '9',
              name: 'Muscle aches',
            },
            {
              id: '10',
              name: 'Sore throat',
            },
          ]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button text="Done" onP={sendIncident} />
      </View>
    </View>
  );
};

export default RegisterSymptoms;
