import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.purpleDark,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 15,
  },
  title: {
    fontSize: 40,
    color: colors.white,
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 20,
    color: colors.greenLight,
    marginBottom: 5,
  },
  picker: {
    width: 350,
    height: 250,
    alignSelf: 'center',
  },
  containerCombo: {
    width: '100%',
  },
});

export default styles;
