import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// components
import AuthStack from './AuthStack';
import AppStack from './AppStack'
import { AuthContext } from '../context/AuthContext';

const AppNav = () => {

    const { userToken } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack /> : <AuthStack />}
            {/* <AppStack /> */}
        </NavigationContainer>
    );
}

export default AppNav;
