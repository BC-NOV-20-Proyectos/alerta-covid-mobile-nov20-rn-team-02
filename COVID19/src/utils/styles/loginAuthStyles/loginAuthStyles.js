import React from 'react';
import{StyleSheet}from 'react-native'
import colors from '../../colors';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'flex-start', 
      backgroundColor:colors.purpleMedium     
    },
    containerContent:{
        width:'100%',
        height:'80%',   
        alignItems: 'center',    
        justifyContent: 'space-around', 
        paddingTop: 80,
        paddingBottom: 50,       
        backgroundColor:colors.white,
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100
    },
    txtTitle: {
        fontSize: 25,
        textTransform: 'uppercase',
        color: colors.purpleMedium,
        fontWeight: 'bold'
    },
    textForgotPW: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 60
    },
    inputContainer:{
        flexDirection:'row',
        width:'80%',
        borderRadius: 10,
        borderWidth: .5,
        borderBottomColor: colors.lightGray        
    },
    containerButton:{
        backgroundColor: colors.purpleMedium,
        width:'80%',
        padding:15,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50
    },
    textButton:{
        color:colors.white,
        textTransform: 'uppercase',
        fontWeight:'bold',
        fontSize:16,        
    }
  });


export default styles;