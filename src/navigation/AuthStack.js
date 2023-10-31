import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// components
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';

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
