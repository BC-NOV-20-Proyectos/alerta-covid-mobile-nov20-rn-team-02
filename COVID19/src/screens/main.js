import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../utils/styles/mainStyle';
import constans from '../utils/constans';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../utils/colors';

const DATA = [
  {
    id: 1,
    navigationName: 'ListTest',
    title: constans.registerLab,
    description: constans.registerLabDescription,
    imageSource: require('../utils/images/laboratory.png'),
  },
  {
    id: 2,
    navigationName: 'Locations',
    title: constans.locations,
    description: constans.locationsDescription,
    imageSource: require('../utils/images/maps.png'),
  },
  {
    id: 3,
    navigationName: 'Prevention',
    title: constans.prevention,
    description: constans.preventionDescription,
    imageSource: require('../utils/images/vaccine.png'),
  },
];

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image style={styles.image} source={item.imageSource} />
    <Text style={styles.subtitle}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </TouchableOpacity>
);

const Main = ({navigation}) => {
  const renderItem = ({item}) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate(item.navigationName)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => alert('Logout')}
        style={styles.logoutContainer}>
        <Icon name="logout" size={45} color={colors.lightGray} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBold}>{constans.greeting}</Text>
      </View>
      <Text style={styles.titleLight}> {constans.tasksTitle} </Text>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Main;
