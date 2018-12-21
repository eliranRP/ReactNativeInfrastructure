import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginContainer from '../src/Features/Authentication/screens/LoginContainer'


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth">
                <Scene key="login" component={LoginContainer} title="Please Login" />
            </Scene>
            <Scene key="main">
            </Scene>
        </Router>
    );
};

export default RouterComponent;
