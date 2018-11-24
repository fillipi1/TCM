import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class NavigationScreen extends React.Component {

    render() {
      return (
        <View style={styles.container}>
            <Text>
                Navigation Screen
            </Text>
        </View>
);
    }
  }
  const styles = StyleSheet.create({
    container: {
      padding:20, 
    },
  });