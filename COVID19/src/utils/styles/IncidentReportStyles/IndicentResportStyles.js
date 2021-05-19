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
  topContainer: {
    width: '95%',
    height: '15%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.o1,
    padding: 20,
    opacity: 0.9,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  titleReport: {
    fontSize: 30,
    color: colors.white,
    marginTop: 15,
  },
  subtitle: {
    marginTop: 5,
    fontSize: 15,
    color: colors.greenLight,
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
