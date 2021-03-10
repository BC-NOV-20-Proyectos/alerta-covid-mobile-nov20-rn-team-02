import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login works!</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
