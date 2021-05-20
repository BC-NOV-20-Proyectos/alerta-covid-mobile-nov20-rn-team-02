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
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  welcomeImg: {
    width: '80%',
    height: '100%',
  },
  txtTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  bottomContainer: {
    height: '50%',
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
    marginTop: 30,
    marginBottom: 40,
    padding: 15,
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
