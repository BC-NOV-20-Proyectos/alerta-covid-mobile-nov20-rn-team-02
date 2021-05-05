import color from 'color';
import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  titleReport: {
    textAlign: 'center',
    fontSize: 35,
    marginTop: 40,
    color: colors.purpleMedium,
  },
  titleCard: {
    textAlign: 'left',
    fontSize: 35,
    marginTop: 40,
    color: colors.purpleMedium,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  value: {
    fontSize: 15,
  },
  cardTitle: {
    fontSize: 25,
  },
  titleStatistics: {
    fontSize: 17,
  },
  cardTitleStatistics: {
    alignSelf: 'flex-start',
    fontSize: 20,
    marginTop: 10,
  },
});

export default styles;
