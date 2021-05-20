import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  supermainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.o2,
  },
  mainContainer: {
    backgroundColor: colors.o2,
    alignItems: 'center',
    flex: 10,
  },
  topContainer: {
    width: '95%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.o1,
    padding: 22,
    opacity: 0.9,
    borderRadius: 10,
    marginTop: 25,
  },
  title: {
    fontSize: 22,
    color: colors.white,
  },
  subtitle: {
    fontSize: 15,
    color: colors.greenLight,
  },
  listStyles: {
    marginTop: 10,
    width: '95%',
    backgroundColor: colors.blueDark,
  },
  buttonContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  text: {
    color: colors.purpleDark,
    fontSize: 14,
  },
});

export default styles;
