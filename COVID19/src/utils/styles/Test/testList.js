import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  icon: {
    marginStart: 10,
    marginRight: 20,
  },
  mainMainConatiner: {
    flex: 1,
    backgroundColor: colors.purpleDark,
  },
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  mainTitle: {
    marginLeft: 10,
    fontSize: 35,
    color: colors.white,
    paddingBottom: 20,
  },
  itemContainer: {
    alignSelf: 'center',
    width: '95%',
    padding: 15,
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.blueDark,
  },
  buttonContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textsPlace: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textsDateTime: {
    color: colors.white,
    fontWeight: '200',
    fontSize: 15,
  },
});

export default styles;
