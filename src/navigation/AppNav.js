import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// components
import AuthStack from './AuthStack';
import AppStack from './AppStack'
import { AuthContext } from '../context/AuthContext';
import { AppContext, AppProvider } from '../context/AppContext';
import HomeStack from './HomeStack';
import { ParkingProvider } from '../context/ParkingContext';

const AppNav = () => {

    const { userToken } = useContext(AuthContext);
    const { parkingName } = useContext(AppContext);

    const openStack = () => {
        if (userToken !== null) {
            if (parkingName !== null) {
                return (
                    <ParkingProvider>
                        <AppStack />
                    </ParkingProvider>
                )

            }
            else {
                return <HomeStack />
            }
        }
        else {
            return <AuthStack />
        }
    }

    return (
        <NavigationContainer>
            {openStack()}
        </NavigationContainer>
    );
}

export default AppNav;
