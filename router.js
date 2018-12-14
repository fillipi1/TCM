import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Splash from './components/splash';
import LoginScreen from './components/login/loginScreen'; 
import NavigationScreen from './components/main/navigationScreen'; 
import Academy from './components/main/academy';
import Forum from './components/main/forum';
import HealthFiles from './components/main/healthFiles';
import Exam from './components/main/examPrep';

const routerComponent = () => 
        <Router>
            <Scene key='root'>
            <Scene key='splash' component={Splash} initial />
                <Scene key='login' component={LoginScreen} title="please login" />
                <Scene key='navigationScreen' component={NavigationScreen} title="Navigation" headerLeft='null' />
                <Scene key='academy' component={Academy} title="academy" />
                <Scene key='exam' component={Exam} title="exam" />
                <Scene key='forum' component={Forum} title="forum" />
                <Scene key='health' component={HealthFiles} title="health" />
            </Scene>
        </Router>;

export default routerComponent;
