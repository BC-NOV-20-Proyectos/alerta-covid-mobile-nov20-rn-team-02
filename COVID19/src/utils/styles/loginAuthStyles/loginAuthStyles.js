import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../colors';
const styles = StyleSheet.create({
  iconStyle: {
    marginStart: 15,
    alignSelf: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.purpleDark,
    padding: 30,
  },
  topContainer: {
    width: '100%',
    height: '40%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  bottomContainer: {
    height: '60%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
  txtTitle: {
    fontSize: 22,
    color: colors.white,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  textForgotPW: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    marginTop: 20,
    borderBottomColor: colors.green,
    borderTopColor: colors.purpleDark,
    borderRightColor: colors.purpleDark,
    borderLeftColor: colors.purpleDark,
  },
  inputInput: {
    color: colors.white,
  },
  containerButton: {
    backgroundColor: colors.greenDark,
    width: '90%',
    marginTop: 35,
    marginBottom: 35,
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textButton: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {
    width: 260,
    height: 260,
  },
});

export default styles;
