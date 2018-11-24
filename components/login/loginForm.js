import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
 
export default class LoginForm extends React.Component {
       
    render() {
        const {navigate} = this.props;
      return (
        <View style={styles.container}>
        <StatusBar
        barStyle = 'light-content'
        />
            <TextInput
                placeholder = 'username or email'
                returnKeyType = 'next'
                onSubmitEditing = {() => this.passwordInput.focus()}
                keyboardType = 'email-address'
                autoCapitalize = 'none'
                autoCorrect = {false}
                style = {styles.input}/>
            <TextInput
                placeholder = 'password'
                returnKeyType = 'go'
                secureTextEntry
                ref = {(input) => this.passwordInput = input}
                style ={styles.input}/>
                <TouchableOpacity onPress={() => navigate('Profile')} style = {styles.buttonContainer}>
                    <Text style = {styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
        </View>
);
    }
  }
  const styles = StyleSheet.create({
    container: {
      padding:20, 
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(230,230,230,0.4)',
        marginBottom: 12,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '800'
    }
  });
  