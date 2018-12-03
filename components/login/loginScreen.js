import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, StatusBar } from 'react-native';
import LoginForm from './loginForm';

const minion = require('../../images/yinyang2.png');

export default class Login extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView 
        behavior={'position'} 
        style={styles.container} 
        keyboardVerticalOffset={-100} 
        >
            <StatusBar barStyle="dark-content" /> 
            <Text style={styles.title}>TCM</Text>
            <View style={styles.logoContainer}> 
                <Image style={styles.logo} source={minion} />
                <Text style={styles.subTitle}>Login or Sign up</Text>
            </View>
            <View>
                <LoginForm />
            </View>
        </KeyboardAvoidingView>
);
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#707272',
    },
    welcome: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    logo: {
        width: '80%',
        height: '80%',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        height: '30%',
    },
    subTitle: {
        color: '#fff',
        marginTop: 10,
        fontSize: 20,
        fontWeight: '900'
    },
    title: {
        color: 'black',
        marginTop: 30,
        fontSize: 50,
        fontWeight: '700',
        textAlign: 'center'
    },
  });
