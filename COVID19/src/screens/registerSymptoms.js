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

const RegisterSymptoms = ({navigation}) => {
  const getFilterPlaces = (dateConvert) => {
    var idArray = [];
    var tenDayAgo = new Date(dateConvert);
    tenDayAgo.setDate(tenDayAgo.getDate() - 10);

    AsyncStorage.getItem('ScannedPlaces').then((res) => {
      const placeToFilter = JSON.parse(res);
      var invertedFilter = placeToFilter.reverse();
      for (var i = 0; i < invertedFilter.length; i++) {
        var placeDate = new Date(invertedFilter[i].date);
        if (placeDate >= tenDayAgo) {
          idArray.push(invertedFilter[i].idPlace);
        }
      }
      return idArray;
    });
  };

  function sendIncident() {
    var incidentObj = {
      symptomatic: false,
      covid_positive: null,
      places: getFilterPlaces(MainFunctions.getFixedDate()),
    };

    //incidentObj.places = getFilterPlaces(MainFunctions.getFixedDate());

    console.log(incidentObj);

    Alert.alert('Inicendt sent Succesfully', 'Your Inicend was send', [
      {
        text: 'OK',
        onPress: () => {
          navigation.navigate('Main');
          //console.log('sdfsf');
        },
      },
    ]);
  }

  const renderItem = ({item}) => {
    return <CustomCheck name={item.name} />;
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
