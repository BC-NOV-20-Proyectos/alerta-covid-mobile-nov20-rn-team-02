import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.o2,
    padding: 5,
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  topContainer: {
    width: '95%',
    height: '15%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: colors.o1,
    padding: 20,
    opacity: 0.9,
    borderRadius: 10,
  },
  mainTitle: {
    fontSize: 30,
    color: colors.white,
  },
  showMessage: {
    fontSize: 15,
    color: colors.greenLight,
  },
  hideMessage: {
    display: 'none',
  },
  flatContainer: {
    backgroundColor: colors.purpleBlue,
    width: '95%',
    height: '68%',
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  itemContainer: {
    width: '100%',
    padding: 15,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: colors.o2,
  },
  textPlace: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
  textDate: {
    color: colors.greenLight,
    fontWeight: '200',
    fontSize: 16,
  },
  btnContainer: {
    flex: 1,
    width: '95%',
    height: '20%',
  },
});

export default styles;
