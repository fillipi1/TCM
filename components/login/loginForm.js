import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class LoginForm extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <TextInput
                placeholder='username or email'
                placeholderTextColor='#fff'
                returnKeyType='next'
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.input} 
            />
            <TextInput
                placeholder='password'
                placeholderTextColor='#fff'
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
      padding: '10%', 
    },
    input: {
        height: '21.5%',
        backgroundColor: 'rgba(230,230,230,0.4)',
        marginBottom: 12,
        paddingHorizontal: '7%',
        borderRadius: 20,
   
        borderColor: '#fff',
        color: 'white',
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        borderRadius: 20,
        borderColor: '#d6d7da',
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '800',
    }
  });

export default LoginForm;
