import React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 1.5;
const widths = width * 10;

export default class NavigationScreen extends React.Component {

    render() {
      return (
<ScrollView >
            <View style={styles.scrollContainer}>
              <View style={styles.top}> 
                <View style={styles.profileImage} />
              </View>
              <ScrollView horizontal> 
              <View style={styles.bottom}>
                  <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner} />
                  </View>
                  <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner} />
                  </View>
                  <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner} />
                  </View>
                  <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner} />
                  </View>
                  <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner} />
                  </View>
                  <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner} />
                  </View>
                  <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner} />
                  </View>
                  <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner} />
                  </View>
              </View>
              </ScrollView>
            </View>
            </ScrollView>
);
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    scrollContainer: {
      height,
      flex: 1
    },
    top: {
      height: '25%',
      alignItems: 'flex-start',
      backgroundColor: '#98d2c1',
      justifyContent: 'center'
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 80,
      borderWidth: 3,
      borderColor: 'white',
      backgroundColor: '#eee',
      },
      bottom: {
        width: 1000,
        backgroundColor: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap',
        padding: 5
      },
      bottomItem: {
        width: '20%',
        height: '30%',
        padding: 0,
      },
      bottomItemInner: {
        backgroundColor: '#292929',
        width: '95%',
        height: '95%'
      }
  });
