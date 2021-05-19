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
            size={25}
            color={colors.o3}
            style={styles.icon}
            name={type === 'Viral' ? 'blood-drop' : 'blood-test'}
          />
        </View>
        <View style={styles.textsContainer}>
          <Text style={styles.textPlace}>{type}</Text>
          <Text style={styles.textDate}>{date}</Text>
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
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.mainTitle}>{constans.listTest}</Text>
        <Text
          style={
            testList.length === 0 ? styles.showMessage : styles.hideMessage
          }>
          {constans.noTestYet}
        </Text>
        <Text
          style={testList.length > 0 ? styles.showMessage : styles.hideMessage}>
          {constans.registerLabDescription}
        </Text>
      </View>
      <View style={styles.flatContainer}>
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
      </View>
      <View style={styles.btnContainer}>
        <Button
          onP={() => navigation.navigate('TestDetails')}
          text={constans.addNewTest}
        />
      </View>
    </View>
  );
};

export default ListTest;
