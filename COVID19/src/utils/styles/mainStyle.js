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
    fontSize: 65,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleLight: {
    fontSize: 30,
    color: colors.pinkLight,
    marginBottom: 30,
  },
  item: {
    height: '85%',
    width: 270,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 20,
    backgroundColor: colors.blueDark,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.pinkLight,
  },
  image: {
    width: 175,
    height: 175,
  },
  description: {
    fontSize: 18,
    color: colors.white,
  },
  imgContainer: {
    backgroundColor: colors.greenLight,
    padding: 30,
    borderRadius: 120,
    marginBottom: 20,
    opacity: 0.9,
  },
});

export default styles;
