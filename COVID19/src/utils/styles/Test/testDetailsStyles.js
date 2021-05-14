import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.o2,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 15,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: colors.o1,
    padding: 20,
    opacity: 0.9,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: colors.o3,
  },
  label: {
    fontSize: 16,
    color: colors.o3,
    marginBottom: 5,
    fontWeight: 'bold',
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
