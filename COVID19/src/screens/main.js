import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../utils/styles/mainStyle';
import constans from '../utils/constans';
import Icon from 'react-native-vector-icons/Fontisto';
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
    imageSource: require('../utils/images/locations.png'),
  },
];

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Image style={styles.image} source={item.imageSource} />
    <Text style={styles.subtitle}>{item.title}</Text>
    <Text>{item.description}</Text>
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
      <View style={styles.titleContainer}>
        <Text style={styles.titleBold}>{constans.greeting}</Text>
        <Icon name="laughing" size={40} color={colors.purpleDark} />
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
