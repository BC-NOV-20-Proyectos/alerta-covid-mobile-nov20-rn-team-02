import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import styles from '../utils/styles/Test/testList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import constans from '../utils/constans';
import colors from '../utils/colors';
import Button from '../components/Button';

const Item = ({date, time, type, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('TestResultsDetails');
      }}>
      <View style={styles.itemContainer}>
        <View>
          <Icon
            size={40}
            color={colors.purpleDark}
            style={styles.icon}
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
  const [testList, setTestList] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('ListCovidTest').then((res) => {
      if (res === null) {
        AsyncStorage.setItem('ListCovidTest', JSON.stringify([]));
      } else {
        setTestList(JSON.parse(res));
      }
    });
  }, []);
  return (
    <View style={styles.mainMainConatiner}>
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>{constans.listTest}</Text>
        <Text
          style={
            testList.length === 0 ? styles.showMessage : styles.hideMessage
          }>
          {'No test yet, press button bellow to add one'}
        </Text>
        {/*<Text style={{color: 'red'}}>{'constans.listTest'}</Text>*/}
        <FlatList
          data={testList}
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
          keyExtractor={(item) => item.id.toString()}
        />
        <Button
          onP={() => navigation.navigate('TestDetails')}
          text={constans.addNewTest}
        />
      </View>
    </View>
  );
};

export default ListTest;
