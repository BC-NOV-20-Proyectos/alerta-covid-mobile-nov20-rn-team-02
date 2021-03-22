import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList} from 'react-native';
import CustomCheck from '../components/CustomCheck';
import Button from '../components/Button';

import styles from '../utils/styles/symptomsStyles/symptomsStyles';

DATA = [
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
];

const RegisterSymptoms = () => {
  return (
    <View style={styles.supermainContainer}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>What symptoms do you have?</Text>
        <FlatList
          style={styles.listStyles}
          data={DATA}
          renderItem={({item}) => {
            return <CustomCheck name={item.name} />;
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button text="Done" />
      </View>
    </View>
  );
};

export default RegisterSymptoms;
