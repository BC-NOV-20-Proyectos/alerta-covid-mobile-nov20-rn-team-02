import React from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/locationsStyles';
import Icon from 'react-native-vector-icons/AntDesign';

const getFixedDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let fullDate = '';
  if (month < 10) {
    fullDate = `${day}/0${month}/${year}`;
  } else {
    fullDate = `${day}/0${month}/${year}`;
  }
  return fullDate;
};

const getFixedTime = () => {
  let today = new Date();
  let time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return time;
};

DATA = [
  {
    id: '1',
    place: 'Soriana',
    date: getFixedDate(),
    time: getFixedTime(),
  },
  {
    id: '2',
    place: 'Mikaza',
    date: getFixedDate(),
    time: getFixedTime(),
  },
  {
    id: '3',
    place: 'Stukasa',
    date: getFixedDate(),
    time: getFixedTime(),
  },
  {
    id: '4',
    place: 'Soriana',
    date: getFixedDate(),
    time: getFixedTime(),
  },
];

const Item = ({place, date, time}) => {
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
        <Text style={styles.textsDateTime}>
          on {date} at {time}
        </Text>
      </View>
    </View>
  );
};

const Location = () => {
  return (
    <View style={styles.mainMainConatiner}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Where have you been</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return (
              <Item place={item.place} date={item.date} time={item.time} />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Icon size={60} color="#5A4DCC" name="pluscircleo" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Location;
