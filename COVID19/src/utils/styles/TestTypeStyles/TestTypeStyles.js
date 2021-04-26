import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '20%',
  },
  txtTitle: {
    fontSize: 40,
    color: colors.purpleMedium,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default styles;
