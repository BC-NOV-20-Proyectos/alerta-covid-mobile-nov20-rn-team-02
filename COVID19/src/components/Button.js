import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../utils/styles/loginAuthStyles/loginAuthStyles'

const Button = ({text}) => {
    return(
        <TouchableOpacity style={styles.containerButton}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
}

export default Button;

