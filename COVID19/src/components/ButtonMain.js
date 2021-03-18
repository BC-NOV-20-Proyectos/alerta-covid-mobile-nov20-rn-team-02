import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from '../utils/styles/mainStyle';

const ButtonMain = ({img,text, onP}) => {
    return(
        <View>
            <TouchableOpacity style={styles.mainButton} onPress={onP}>
                <Image style={styles.btnLogo} source={img} />
            </TouchableOpacity>
            <Text style={styles.txtButton}>{text}</Text>
        </View>
    );
}

export default ButtonMain;