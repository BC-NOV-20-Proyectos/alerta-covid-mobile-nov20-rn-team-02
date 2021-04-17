import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.purpleDark,
    paddingTop: 50,
    paddingStart: 10,
  },
  item: {
    height: '75%',
    width: 290,
    marginHorizontal: 8,
    marginVertical: 8,
    borderRadius: 30,
    padding: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    backgroundColor: colors.purpleSuperLight,
    padding: 2,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    width: '50%',
    marginBottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleBold: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.white,
    marginRight: 10,
  },
  titleLight: {
    fontSize: 25,
    color: colors.white,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.purpleDark,
  },
  image: {
    width: '100%',
    height: '60%',
  },
});

export default styles;
