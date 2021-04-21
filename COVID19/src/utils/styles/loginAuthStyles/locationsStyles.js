import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
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
    textAlign: 'center',
    fontSize: 30,
    color: colors.greenLight,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  itemContainer: {
    alignSelf: 'center',
    width: '90%',
    padding: 10,
    margin: 10,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderWidth: 2,
    backgroundColor: colors.greenLight,
  },
  buttonContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textsPlace: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 21,
  },
  textsDateTime: {
    color: colors.white,
    fontWeight: '200',
    fontSize: 15,
  },
});

export default styles;
