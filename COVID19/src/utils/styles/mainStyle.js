import React from 'react';
import{StyleSheet}from 'react-native'
import colors from '../colors';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'flex-start', 
      backgroundColor:colors.purpleMedium     
    },
    containerContent:{
      width:'90%',
      height:'98%',   
      alignItems: 'center',    
      justifyContent: 'center',      
      backgroundColor:colors.white,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:100
  },
  vQuestion: {
    width: '100%',
    alignItems: 'center',
  },
  optionsUp:{
    width: '98%',
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-around',
  },
  optionsDown:{
    width: '98%',
    alignItems: 'center', 
    justifyContent: 'space-around',
  },
  mainButton:{
    backgroundColor: colors.purpleMedium,
    width:120,
    height: 120,
    padding:15,
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50
  },
  textQuestion: {
    color: colors.purpleMedium,
    fontSize: 28,
    fontWeight: 'bold',
  },
  txtButton: {
    marginTop: 10,
    color: colors.purpleMedium,
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btnLogo: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: colors.purpleMedium,
  },
  });


export default styles;