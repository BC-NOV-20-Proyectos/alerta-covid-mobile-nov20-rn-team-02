import React from 'react';
import {Text, View, FlatList, Alert} from 'react-native';
import CustomCheck from '../components/CustomCheck';
import Button from '../components/Button';
import constans from '../utils/constans';
import styles from '../utils/styles/symptomsStyles/symptomsStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainFunctions} from '../utils/functions/mainFunctions';
import axios from 'axios';
import symptomsList from '../utils/json/symptoms';

var count = 0;

const RegisterSymptoms = ({navigation, route}) => {
  const {covidResult} = route.params;
  function incidentAPI(object) {
    AsyncStorage.getItem('userToken').then((res) => {
      axios({
        headers: {
          Authorization: 'Bearer ' + res,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'post',
        url: constans.urlService + 'incident',
        data: object,
      }).then((response) => {
        if (response.data.error === false) {
          Alert.alert('Incident sent', 'Alert incident sent succesfully!', [
            {text: 'OK', onPress: () => navigation.navigate('Main')},
          ]);
        } else {
          Alert.alert('Incident Error', 'This alert was not sent', [
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
        covid_positive: covidResult,
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
        <View style={styles.topContainer}>
          <Text style={styles.title}>{constans.QuestionSymptoms}</Text>
          <Text style={styles.subtitle}>{constans.seeAllSymptoms}</Text>
        </View>
        <FlatList
          style={styles.listStyles}
          data={symptomsList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button text={constans.done} onP={sendIncident} />
      </View>
    </View>
  );
};

export default RegisterSymptoms;
