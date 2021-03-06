import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoginForm extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <TextInput
                placeholder='username or email'
                returnKeyType='next'
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input} 
            />
            <TextInput
                placeholder='password'
                returnKeyType='go'
                secureTextEntry
                ref={input => { this.passwordInput = input; }}
                style={styles.input} 
            />
                <TouchableOpacity 
                onPress={() => Actions.navigationScreen()}  
                style={styles.buttonContainer}
                >
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
        </View>
);
    }
  }
  const styles = StyleSheet.create({
    container: {
      padding: 20, 
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(230,230,230,0.4)',
        marginBottom: 12,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        borderRadius: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '800'
    }
  });

export default LoginForm;
