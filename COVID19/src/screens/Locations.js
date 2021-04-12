import React from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import styles from '../utils/styles/loginAuthStyles/locationsStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import {MainFunctions} from '../utils/functions/mainFunctions';

import colors from '../utils/colors';
import {Colors} from 'react-native/Libraries/NewAppScreen';

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

const Location = ({navigation}) => {
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
