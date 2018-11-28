import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './components/login/loginScreen'; 
import NavigationScreen from './components/main/navigationScreen'; 

const routerComponent = () => 
        <Router>
            <Scene key='root'>
                <Scene key='login' component={LoginScreen} title="please login" initial />
                <Scene key='navigationScreen' component={NavigationScreen} title="Navigation" />
            </Scene>
        </Router>;

export default routerComponent;
