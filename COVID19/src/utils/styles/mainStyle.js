import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.o2,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 50,
  },
  logoutContainer: {
    width: '100%',
    height: '10%',
    marginBottom: 10,
    paddingEnd: 15,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  titleContainer: {
    width: '95%',
    height: '15%',
    alignItems: 'flex-start',
    backgroundColor: colors.o1,
    padding: 20,
    opacity: 0.9,
    borderRadius: 20,
    marginBottom: 5,
  },
  titleBold: {
    fontSize: 35,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 5,
  },
  titleLight: {
    fontSize: 20,
    color: colors.greenLight,
  },
  item: {
    height: '80%',
    width: 200,
    marginVertical: 30,
    borderRadius: 20,
    backgroundColor: colors.purpleBlue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginStart: 8,
    marginEnd: 8,
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.greenLight,
    marginTop: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  description: {
    marginTop: 2,
    fontSize: 14,
    color: colors.white,
  },
  imgContainer: {
    backgroundColor: colors.o2,
    padding: 30,
    borderRadius: 120,
    opacity: 0.8,
  },
  moreInfo: {
    height: '20%',
    width: '95%',
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.o1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  moreInfoText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 14,
  },
  spamInfo: {
    color: colors.greenLight,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
});

export default styles;
