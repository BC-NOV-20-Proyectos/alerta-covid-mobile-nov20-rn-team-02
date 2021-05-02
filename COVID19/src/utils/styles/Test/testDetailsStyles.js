import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.blueDark,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 15,
  },
  title: {
    fontSize: 40,
    color: colors.white,
    marginTop: 10,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold',
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
