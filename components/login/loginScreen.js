import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import LoginForm from './loginForm';

const minion = require('../../images/minion.png');

export default class Login extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView 
        behavior={'position'} 
        style={styles.container} 
        keyboardVerticalOffset={-100} 
        >
         <Text style={styles.title}>TCM</Text>
            <View style={styles.logoContainer}>  
                <Image style={styles.logo} source={minion} />
                <Text style={styles.subTitle}>Fillipi's Minions at work</Text>
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
      backgroundColor: '#3498db',
    },
    welcome: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },
    logo: {
        width: 140,
        height: 140,
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    subTitle: {
        color: '#f1c40f',
        marginTop: 10,
        fontSize: 20,
        fontWeight: '900'
    },
    title: {
        color: '#dff9fb',
        marginTop: 30,
        fontSize: 50,
        fontWeight: '700',
        textAlign: 'center'
    },
  });
