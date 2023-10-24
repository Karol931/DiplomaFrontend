import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import { AuthContext } from '../context/AuthContext';
import HomePage from '../screens/homePage';

const AppNav = () => {

    const { userToken } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {userToken !== null ? <HomePage /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default AppNav;
