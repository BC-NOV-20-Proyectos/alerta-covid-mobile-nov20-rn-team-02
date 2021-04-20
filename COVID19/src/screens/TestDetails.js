import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Touchable} from 'react-native';
import constans from '../utils/constans';
import Button from '../components/Button';
import styles from '../utils/styles/testDetailsStyles/testDetailsStyles';
import DatePicker from 'react-native-date-picker';
import ComboBox from 'react-native-combobox';
import colors from '../utils/colors';

import AsyncStorage from '@react-native-async-storage/async-storage';

const TestDetails = ({navigation}) => {
  function navigate() {
    var test = {
      id: 0,
      type: '',
      date: '',
    };

    AsyncStorage.getItem('ListCovidTest').then((res) => {
      console.log(res);
      var ListCovidTestArray = JSON.parse(res);
      var size = ListCovidTestArray.length + 1;
      test.id = size;
      test.date = date;
      if (selectedValue === 0) {
        test.type = 'Viral';
        ListCovidTestArray.push(test);
        AsyncStorage.setItem(
          'ListCovidTest',
          JSON.stringify(ListCovidTestArray),
        );
        navigation.navigate('RegisterSymptoms');
      } else if (selectedValue === 1) {
        test.type = 'Body';
        ListCovidTestArray.push(test);
        AsyncStorage.setItem(
          'ListCovidTest',
          JSON.stringify(ListCovidTestArray),
        );
        navigation.navigate('RegisterSymptoms');
      } else {
        alert('Please select if you test is Viral o Body');
      }
    });
  }
  const [date, setDate] = useState(new Date());

  const [selectedValue, setSelectedValue] = useState('');

  const values = ['Viral', 'Body'];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{constans.testDetails}</Text>
      <Text style={styles.subTitle}>{constans.selectDate}</Text>
      <Text style={styles.subTitle}>{constans.selectType}</Text>
      <View style={styles.conatinerCombo}>
        <ComboBox
          style={styles.ComboBox}
          values={values}
          onValueSelect={setSelectedValue}
          textColor={colors.purpleDark}
          defaultValue={'Select type'}
          backgroundColor={colors.purpleLight}
        />
      </View>
      <Text style={styles.subTitle}>{constans.testDate}</Text>
      <DatePicker
        style={styles.picker}
        date={date}
        textColor={colors.datePickTestColor}
        androidVariant={'nativeAndroid'}
      />
      <Button text={constans.done} onP={navigate} />
    </View>
  );
};

export default TestDetails;
