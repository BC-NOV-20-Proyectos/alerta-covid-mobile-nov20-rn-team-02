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

const RegisterSymptoms = ({navigation}) => {
  /*
  {
    "symptomatic": true,
    "covid_positive": null,
    "places": [1,2]
  }
  */
  function sendIncident() {
    Alert.alert('Inicendt sent Succesfully', 'Your Inicend was send', [
      {text: 'OK', onPress: () => navigation.navigate('Main')},
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
