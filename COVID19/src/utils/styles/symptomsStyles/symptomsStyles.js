import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import colors from '../../colors';

const styles = StyleSheet.create({
  supermainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: colors.white,
    alignItems: 'center',
    flex: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    color: colors.purpleMedium,
    fontWeight: 'bold',
    marginTop: 30,
  },
  listStyles: {
    marginTop: 20,
    width: '90%',
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    flex: 2.3,
  },
  text: {
    color: colors.gray,
    fontSize: 16,
  },
});

export default styles;
