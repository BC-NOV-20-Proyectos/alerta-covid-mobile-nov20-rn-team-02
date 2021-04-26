import React, {useState} from 'react';
import {View, Text} from 'react-native';
import constans from '../utils/constans';
import Button from '../components/Button';
import styles from '../utils/styles/testDetailsStyles/testDetailsStyles';
import DatePicker from 'react-native-date-picker';
import ComboBox from 'react-native-combobox';
import colors from '../utils/colors';

const TestDetails = ({navigation}) => {
  function navigate() {
    navigation.navigate('RegisterSymptoms');
  }
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('data');
  const [show, setShow] = useState(false);

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
          defaultValue={'Viral'}
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
