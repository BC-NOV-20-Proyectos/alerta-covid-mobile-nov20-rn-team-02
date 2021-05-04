import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import styles from '../utils/styles/mainStyle';
import constans from '../utils/constans';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../utils/colors';
import menuData from '../utils/json/menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import services from '../utils/functions/services';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.imgContainer}>
      <Image style={styles.image} source={item.imageSource} />
    </View>
    <Text style={styles.subtitle}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
  </TouchableOpacity>
);

const Main = ({navigation}) => {
  const signOutReadAsyncToken = async () => {
    try {
      const token = await AsyncStorage.getItem(constans.asyncTokenVar);
      if (token !== null) {
        const webservice = constans.urlService + 'user/sign_out';
        const config = {
            headers: { Authorization: 'Bearer ' + token}
        };
        const bodyParameters = {
          key: ''
        };
        services.signOut(webservice, bodyParameters, config).then((resData)=>{
          if(resData === constans.signOutResDataCode)
          { 
            navigation.navigate('Login');
          }
          else{
            alert(constans.errorSignOut);
          }  
        });             
      }
    } catch (e) {
      alert(e.toString());
    }
  };

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
        onPress={() => signOutReadAsyncToken()}
        style={styles.logoutContainer}>
        <Icon name="logout" size={45} color={colors.lightGray} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.titleBold}>{constans.greeting}</Text>
      </View>
      <Text style={styles.titleLight}> {constans.tasksTitle} </Text>
      <FlatList
        horizontal={true}
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Main;
