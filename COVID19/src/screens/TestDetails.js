import React, {useState} from 'react';
import {View, Text} from 'react-native';
import constans from '../utils/constans';
import Button from '../components/Button';
import styles from '../utils/styles/Test/testDetailsStyles';
import DatePicker from 'react-native-date-picker';
import ComboBox from 'react-native-combobox';
import colors from '../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainFunctions} from '../utils/functions/mainFunctions';

const TestDetails = ({navigation}) => {
  function navigate() {
    var test = {
      id: 0,
      type: '',
      date: '',
    };
    AsyncStorage.getItem('ListCovidTest').then((res) => {
      var ListCovidTestArray = JSON.parse(res);
      var size = ListCovidTestArray.length + 1;
      test.id = size;
      test.date = MainFunctions.fixedDate(date);
      if (selectedValue === 0) {
        test.type = 'Viral';
        ListCovidTestArray.push(test);
        AsyncStorage.setItem(
          'ListCovidTest',
          JSON.stringify(ListCovidTestArray),
        );
        navigation.navigate('RegisterSymptoms', {covidResult: null});
      } else if (selectedValue === 1) {
        test.type = 'Body';
        ListCovidTestArray.push(test);
        AsyncStorage.setItem(
          'ListCovidTest',
          JSON.stringify(ListCovidTestArray),
        );
        navigation.navigate('RegisterSymptoms', {covidResult: null});
      } else {
        alert('Please select if you test is Viral o Body');
      }
    });
  }
  const [selectedValue, setSelectedValue] = useState('');

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const values = ['Viral', 'Body'];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>{constans.testDetails}</Text>
        <Text style={styles.subtitle}>{constans.addTestDetails}</Text>
      </View>
      <Text style={styles.label}>{constans.selectType}</Text>
      <View style={styles.containerCombo}>
        <ComboBox
          values={values}
          onValueSelect={setSelectedValue}
          textColor={colors.o2}
          fontSize={14}
          defaultValue={'Test type'}
          backgroundColor={colors.o3}
        />
      </View>
      <Text style={styles.label}>{constans.selectDate}</Text>
      <DatePicker
        style={styles.picker}
        androidVariant="nativeAndroid"
        date={date}
        mode={'date'}
        onDateChange={setDate}
        textColor={colors.o3}
        fadeToColor={colors.o1}
        backgroundColor={colors.o2}
      />
      <Button text={constans.done} onP={navigate} />
    </View>
  );
};

export default TestDetails;
