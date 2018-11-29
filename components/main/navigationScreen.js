import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';


class NavigationScreen extends React.Component {

    render() {
      return (
            <View style={styles.container}>
              <View style={styles.top}> 
              </View>
              <View style={styles.bottom}>
                  <TouchableOpacity style={styles.bottomItem} onPress={() => Actions.login()} >
                    <View style={[styles.bottomItemInner, { backgroundColor: '#A75252', borderColor: '#A75252' }]}>
                      <Text style={[styles.text, { marginLeft: 22 }]}>
                        Academy
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bottomItem}>
                    <View style={[styles.bottomItemInner, { backgroundColor: '#395176', borderColor: '#395176' }]}>
                      <Text style={[styles.text, { marginLeft: 43 }]}>
                        Forum
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bottomItem}>
                    <View style={[styles.bottomItemInner, { backgroundColor: '#5B9377', borderColor: '#5B9377' }]}>
                      <Text style={[styles.text, { marginLeft: 17 }]}>
                        Exam Prep
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.bottomItem}>
                    <View style={[styles.bottomItemInner, { backgroundColor: '#D4D55D', borderColor: '#D4D55D' }]}>
                      <Text style={[styles.text, { marginLeft: 10 }]}>
                        Health Files
                      </Text>
                    </View>
                  </TouchableOpacity>
              </View>
            </View>
);
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#fff'
    },
    top: {
      height: '10%',
      alignItems: 'flex-start',
      backgroundColor: '#3498db',
      justifyContent: 'center'
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 80,
      borderWidth: 3,
      borderColor: '#fff',
      backgroundColor: '#eee',
      },
      bottom: {
        height: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 10,
        marginTop: 30,
      },
      bottomItem: {
        width: '50%',
        height: '30%',
        marginBottom: 20,
      },
      bottomItemInner: {
        width: '95%',
        height: '95%',
        marginBottom: 20,
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        borderRadius: 20,
        borderWidth: 2,
      },
      text: {
        color: 'white',
        fontSize: 30,
        marginTop: 20
      }
  });

  export default NavigationScreen; 
