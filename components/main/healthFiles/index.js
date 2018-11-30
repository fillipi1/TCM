import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, StatusBar } from 'react-native';


class HealthFiles extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView 
        behavior={'position'} 
        style={styles.container} 
        keyboardVerticalOffset={-100} 
        >
            <StatusBar barStyle="light-content" /> 
            <Text style={styles.title}>Health Files</Text>
        </KeyboardAvoidingView>
);
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#707272',
    },
    title: {
        color: '#fff',
        marginTop: 30,
        fontSize: 50,
        fontWeight: '700',
        textAlign: 'center'
    },
  });

  export default HealthFiles;
