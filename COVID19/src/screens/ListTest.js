import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Fontisto';
import styles from '../utils/styles/loginAuthStyles/locationsStyles';

DATA = [
  {
    id: '1',
    type: 'viral',
    date: '10/03/98',
  },
  {
    id: '2',
    type: 'blood-drop',
    date: '10/03/98',
  },
  {
    id: '3',
    type: 'viral',
    date: '10/03/98',
  },
  {
    id: '4',
    type: 'virallll',
    date: '10/03/98',
  },
];

const Item = ({date, time, type, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('TestResultsDetails');
      }}>
      <View style={styles.itemContainer}>
        <View>
          <Icon2
            size={40}
            color="white"
            style={styles.icon}
            style={{marginStart: 20, marginRight: 10}}
            name={type === 'viral' ? 'blood-drop' : 'blood-test'}
          />
        </View>

        <View style={styles.textsContainer}>
          <Text style={styles.textsPlace}>{type}</Text>
          <Text style={styles.textsDateTime}>on {date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ListTest = ({navigation}) => {
  return (
    <View style={styles.mainMainConatiner}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>Where have you been</Text>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return (
              <Item
                date={item.date}
                time={item.time}
                type={item.type}
                navigation={navigation}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TestDetails');
          }}
          style={styles.buttonContainer}>
          <Icon size={60} color={colors.purpleMedium} name="pluscircleo" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ListTest;