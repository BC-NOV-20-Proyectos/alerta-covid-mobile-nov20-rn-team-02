import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 35,
    color: colors.purpleMedium,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: colors.purpleDark,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 60,
  },
  picker: {
    alignSelf: 'flex-start',
    marginLeft: 50,
  },
  conatinerCombo: {
    width: '75%',
  },
});

export default styles;
