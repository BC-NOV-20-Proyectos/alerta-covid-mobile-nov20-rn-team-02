import React from 'react';
import {StyleSheet} from 'react-native';

import colors from '../../colors';

const styles = StyleSheet.create({
  supermainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: colors.blueDark,
    alignItems: 'center',
    flex: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: colors.white,
    marginTop: 30,
  },
  listStyles: {
    marginTop: 20,
    width: '95%',
    backgroundColor: colors.blueDark,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    flex: 2,
    backgroundColor: colors.blueDark,
  },
  text: {
    color: colors.purpleDark,
    fontSize: 16,
  },
});

export default styles;
