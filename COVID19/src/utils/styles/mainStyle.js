import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  containerContent: {
    paddingTop: 25,
    width: '80%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  optionsUp: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainButton: {
    backgroundColor: colors.purpleMedium,
    width: 120,
    height: 120,
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 35,
  },
  textQuestion: {
    color: colors.purpleMedium,
    fontSize: 36,
    fontWeight: 'bold',
  },
  txtButton: {
    marginTop: 10,
    color: colors.purpleDark,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnLogo: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: colors.purpleMedium,
  },
});

export default styles;
