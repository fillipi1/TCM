import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View, StatusBar } from 'react-native';
import firebase from '../../../firebase';


class Academy extends React.Component {

  componentDidMount() {
    const pointsRef = firebase.database().ref('points');
    pointsRef.on('value', data => {
      console.log(data.val());
    });
  }
    render() {
      return (
        <View 
        style={styles.container} 
        >
            <StatusBar barStyle="light-content" /> 
            <Text style={styles.title}>Academy under construction</Text>
        </View>
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

  export default Academy;
