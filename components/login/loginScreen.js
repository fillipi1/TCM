import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image } from 'react-native';
import LoginForm from './loginForm'

export default class App extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView behavior = 'padding' style={styles.container}>
         <Text style ={styles.title}>TCM APP</Text>
            <View style ={styles.logoContainer}>  
                <Image style={styles.logo} source = {require('../../images/minion.png')}/>
                <Text style ={styles.subTitle}>Fillipi's Minions at work</Text>
            </View>
            <View style ={styles.formContainer}>
                <LoginForm/>
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
  