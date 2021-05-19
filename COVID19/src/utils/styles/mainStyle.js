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
  },
  logoutContainer: {
    width: '100%',
    marginBottom: 10,
    paddingEnd: 15,
    alignItems: 'flex-end',
  },
  titleContainer: {
    width: '95%',
    alignItems: 'flex-start',
    backgroundColor: colors.o1,
    padding: 20,
    opacity: 0.9,
    borderRadius: 20,
    marginBottom: 15,
  },
  titleBold: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 10,
  },
  titleLight: {
    fontSize: 20,
    color: colors.o3,
  },
  item: {
    height: 220,
    width: 200,
    marginVertical: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: colors.purpleBlue,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.greenLight,
    marginTop: 5,
  },
  image: {
    width: 80,
    height: 80,
  },
  description: {
    fontSize: 12,
    color: colors.white,
  },
  imgContainer: {
    backgroundColor: colors.o2,
    padding: 20,
    borderRadius: 120,
    opacity: 0.8,
  },
});

export default styles;
