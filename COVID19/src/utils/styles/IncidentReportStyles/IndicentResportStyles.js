import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.o2,
    padding: 5,
  },
  titleReport: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
    marginTop: 15,
    marginBottom: 15,
  },
  cardTitle: {
    textAlign: 'left',
    fontSize: 25,
    marginTop: 40,
    color: colors.o2,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.o1,
  },
  value: {
    fontSize: 14,
  },
  cardTitle: {
    fontSize: 25,
    color: colors.o2,
  },
  titleStatistics: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.greenDark,
  },
  cardTitleStatistics: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: colors.o1,
  },
});

export default styles;
