import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/locationsStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import {MainFunctions} from '../utils/functions/mainFunctions';

import colors from '../utils/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

/*
DATA = [
  {
    id: '1',
    place: 'Soriana',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
  {
    id: '2',
    place: 'MagmaLabs',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
  {
    id: '3',
    place: 'Starbucks',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
  {
    id: '4',
    place: 'Las Brasas',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
  {
    id: '5',
    place: 'Steren',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
  {
    id: '6',
    place: 'UDC',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
  {
    id: '7',
    place: 'TEC',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
  {
    id: '8',
    place: 'Tacos panchito',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
  {
    id: '9',
    place: 'Michidogos',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
  {
    id: '10',
    place: 'Tacos el amigo',
    date: MainFunctions.getFixedDate(),
    time: MainFunctions.getFixedTime(),
  },
];
*/

DATA = [];

const Item = ({place, date}) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Icon
          size={40}
          color="white"
          style={styles.icon}
          style={{marginStart: 20, marginRight: 10}}
          name="calendar"
        />
      </View>

      <View style={styles.textsContainer}>
        <Text style={styles.textsPlace}>{place}</Text>
        <Text style={styles.textsDateTime}>on {date}</Text>
      </View>
    </View>
  );
};

const scannedPlacesArray = [];

/*const storePlaces = async () => {
  var value = await AsyncStorage.getItem('ScannedPlaces');
  if (value === null) {
    console.log(value);
    value = AsyncStorage.setItem(
      'ScannedPlaces',
      JSON.stringify(scannedPlacesArray),
    );
  } else {
    console.log(value);
  }
};*/

const Location = ({navigation}) => {
  const [dataPlaces, setDataPlaces] = useState(null);
  useEffect(() => {
    async function getData() {
      let value = await AsyncStorage.getItem('ScannedPlaces');
      if (value === null) {
        console.log(value);
        value = AsyncStorage.setItem(
          'ScannedPlaces',
          JSON.stringify(scannedPlacesArray),
        );
      } else {
        setDataPlaces(value);
        console.log(dataPlaces);
      }
    }
    getData();
  });

  return (
    <View style={styles.mainMainConatiner}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Where have you been</Text>
        <FlatList
          data={dataPlaces}
          renderItem={({item}) => {
            return <Item place={item.namePlace} date={item.date} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Camera')}
          style={styles.buttonContainer}>
          <Icon size={60} color={colors.purpleMedium} name="pluscircleo" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Location;
