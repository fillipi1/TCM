import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const minion = require('../../images/yinyang2.png');

export default class Splash extends React.Component {
    componentWillMount() {
        setTimeout(() => {
            Actions.navigationScreen();
        }, 4000);
    }
    render() {
      return (
        <View 
        style={styles.container} 
        >
            <View style={styles.logoContainer}> 
                <Image style={styles.logo} source={minion} />
            </View>
            <Text style={styles.title}>HealthBase</Text>
        </View>
);
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    logo: {
        width: '60%',
        height: '60%',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        color: 'black',
        marginTop: 30,
        fontSize: 50,
        fontWeight: '700',
        textAlign: 'center'
    },
  });
