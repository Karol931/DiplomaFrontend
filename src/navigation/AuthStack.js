import React from 'react';
import { SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from '../screens/loginPage';
import RegisterPage from '../screens/registerPage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginPage}></Stack.Screen>
            <Stack.Screen name="Register" component={RegisterPage}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default AuthStack;
