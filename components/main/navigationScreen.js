import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

const joe = require('../../images/joe.jpg');
const academy = require('../../images/academy.png');
const forum = require('../../images/forum.png');
const exam = require('../../images/exam.png');
const files = require('../../images/files.png');
const headerImage = require('../../images/water3.png');

class NavigationScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottom}>
          <View style={styles.top}>
            <View style={{ alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
            <ImageBackground source={headerImage} style={{ width: '100%', height: '90%', flexGrow: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Image style={styles.profile} source={joe} />
            <Text style={{ fontSize: 30, fontWeight: '700', color: 'white' }}>
                Joe Rogan
            </Text>
            <Text style={{ fontSize: 15, fontWeight: '700', color: 'black' }}>
                Level: Sage
            </Text>
            </ImageBackground>   
            </View>
            <View style={styles.blueHeader}>
              <TouchableOpacity style={styles.bottomItem} onPress={() => Actions.academy()} >
                <View style={styles.bottomItemInner}>
                  <Image style={styles.logo} source={academy} />
                  <Text style={styles.text}>
                    Academy
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomItem} onPress={() => Actions.exam()}>
                <View style={styles.bottomItemInner}>
                  <Image style={styles.logo} source={exam} />
                  <Text style={styles.text}>
                    Exam prep
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomItem} onPress={() => Actions.health()}>
                <View style={styles.bottomItemInner}>
                  <Image style={styles.logo} source={files} />
                  <Text style={styles.text}>
                    Health Files
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomItem} onPress={() => Actions.forum()}>
                <View style={styles.bottomItemInner}>
                  <Image style={styles.logo} source={forum} />
                  <Text style={styles.text}>
                    Forum
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View> 
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
      height: '25%',
      backgroundColor: '#3498db',
      width: '100%',
      flexGrow: 1,
    },
    blueHeader: {
      height: '25%',
      backgroundColor: '#3498db',
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      display: 'flex',
      
    },
    logo: {
      width: 80,
      height: 80,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
      },
      profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        },
      bottom: {
        height: '100%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
      },
      bottomItem: {
        width: '50%',
        height: '50%',
        marginBottom: '45%',
        marginTop: '0%',
 
      },
      bottomItemInner: {
        width: '95%',
        height: '85%',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        borderRadius: 15,
        marginLeft: '2.3%',
        backgroundColor: '#fff',
        borderColor: '#fff',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        color: 'black',
        fontSize: 30,
        marginTop: 20
      }
  });

  export default NavigationScreen; 
