import React, {useState} from 'react';
import {View, Text} from 'react-native';
import constans from '../utils/constans';
import Button from '../components/Button';
import styles from '../utils/styles/testDetailsStyles/testDetailsStyles';
import DatePicker from 'react-native-date-picker';
import ComboBox from 'react-native-combobox';
import colors from '../utils/colors';

const TestDetails = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('data');
  const [show, setShow] = useState(false);

  const [selectedValue, setSelectedValue] = useState('');

  const values = ['Positive', 'Negative'];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>{constans.testDetails}</Text>
      <Text style={styles.subTitle}>{constans.selectDate}</Text>
      <DatePicker
        style={styles.picker}
        date={date}
        textColor="#5A4DCC"
        // fadeToColor={{background: 'red'}}
        androidVariant={'nativeAndroid'}
      />
      <Text style={styles.subTitle}>{constans.testResult}</Text>

      <View style={styles.conatinerCombo}>
        <ComboBox
          style={styles.ComboBox}
          values={values}
          onValueSelect={setSelectedValue}
          textColor={colors.purpleDark}
          defaultValue={'Negative'}
          backgroundColor={colors.purpleLight}
        />
      </View>

      <Button text={constans.done} />
    </View>
  );
};

export default TestDetails;
