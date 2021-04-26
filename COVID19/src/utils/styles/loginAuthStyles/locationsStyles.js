import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  mainMainConatiner: {
      flex:1
  },
  mainContainer: {
    flex: 1,
    paddingTop: 20,
    // :(
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  mainTitle: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.purpleMedium,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  itemContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.purpleMedium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 20,
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
