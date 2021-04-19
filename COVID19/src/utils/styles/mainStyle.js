import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.purpleDark,
    paddingTop: 20,
    paddingStart: 10,
  },
  logoutContainer: {
    width: '100%',
    marginBottom: 10,
    paddingEnd: 15,
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  titleContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  titleBold: {
    fontSize: 56,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleLight: {
    fontSize: 30,
    color: colors.white,
    marginBottom: 30,
  },
  item: {
    height: '90%',
    width: 300,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 20,
    padding: 20,
    backgroundColor: colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.purpleDark,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '60%',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
