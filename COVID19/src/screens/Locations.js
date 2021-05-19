import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';
import styles from '../utils/styles/Locations/Locations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constans from '../utils/constans';
import Button from '../components/Button';
const Item = ({place, date}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textPlace}>{place}</Text>
      <Text style={styles.textDate}>{date}</Text>
    </View>
  );
};

const Location = ({navigation}) => {
  const [dataPlaces, setDataPlaces] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('ScannedPlaces').then((res) => {
      if (res === null) {
        AsyncStorage.setItem('ScannedPlaces', JSON.stringify([]));
      } else {
        setDataPlaces(JSON.parse(res));
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.mainTitle}>{constans.titleLocation}</Text>
        <Text
          style={
            dataPlaces.length === 0 ? styles.showMessage : styles.hideMessage
          }>
          {constans.noLocationsYet}
        </Text>
        <Text
          style={
            dataPlaces.length > 0 ? styles.showMessage : styles.hideMessage
          }>
          {constans.locationsDescription}
        </Text>
      </View>
      <View style={styles.flatContainer}>
        <FlatList
          data={dataPlaces}
          renderItem={({item}) => {
            return <Item place={item.namePlace} date={item.date} />;
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={styles.btnContainer}>
        <Button
          text={constans.addNewLocation}
          onP={() => navigation.navigate('Camera')}
        />
      </View>
    </View>
  );
};

export default Location;
