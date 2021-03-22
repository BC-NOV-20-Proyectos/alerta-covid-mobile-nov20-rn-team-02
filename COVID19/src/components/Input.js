import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../utils/styles/loginAuthStyles/loginAuthStyles';
import Icon from 'react-native-vector-icons/AntDesign';

const Input = ({placeholderTxt, iconName, onCh}) => {
    return(
        <View style={styles.inputContainer}>
            <Icon name={iconName} color="gray" size={25} style={{marginStart: 15, alignSelf:'center'}}/>
            <TextInput                 
                placeholder={placeholderTxt}
                secureTextEntry={placeholderTxt === 'Password' && true}
                placeholderTextColor="gray"
                onChange={onCh}
            />
        </View>
    );
}

export default Input;

