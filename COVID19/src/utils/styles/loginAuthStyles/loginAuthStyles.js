import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.o2,
    padding: 20,
  },
  topContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeImg: {
    width: '90%',
    height: '100%',
  },
  txtTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  bottomContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
    backgroundColor: colors.o1,
    borderRadius: 50,
    color: colors.white,
  },
  inputText: {
    color: colors.o3,
  },
  iconStyle: {
    marginStart: 20,
    alignSelf: 'center',
  },
  containerButton: {
    backgroundColor: colors.greenDark,
    width: '80%',
    marginTop: 40,
    marginBottom: 40,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textButton: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textForgotPW: {
    color: colors.white,
    fontSize: 12,
    marginBottom: 10,
  },
});

export default styles;
