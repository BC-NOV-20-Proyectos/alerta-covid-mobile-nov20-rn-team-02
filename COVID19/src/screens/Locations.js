import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/locationsStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import {MainFunctions} from '../utils/functions/mainFunctions';
import colors from '../utils/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const Location = ({navigation}) => {
  const [dataPlaces, setDataPlaces] = useState();
  useEffect(() => {
    AsyncStorage.getItem('ScannedPlaces').then((res) => {
      if (res === null) {
        AsyncStorage.setItem('ScannedPlaces', JSON.stringify([]));
      } else {
        //console.log(JSON.parse(res));
        setDataPlaces(JSON.parse(res));
      }
    });
  }, []);

  return (
    <View style={styles.mainMainConatiner}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Where have you been</Text>
        <FlatList
          data={dataPlaces}
          renderItem={({item}) => {
            return <Item place={item.namePlace} date={item.date} />;
          }}
          keyExtractor={(item) => item.id.toString()}
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
