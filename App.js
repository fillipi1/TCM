import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import Login from './components/login/loginScreen';
import {createStackNavigator,createAppContainer} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile')}
      />
    );
  }
}

const NavigationApp = createStackNavigator({
  Home: { screen: Login},
  Profile: {screen: HomeScreen},
})
class App extends React.Component {
  render() {
    return <NavigationApp/>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(NavigationApp);