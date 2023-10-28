import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    StyleSheet
} from 'react-native';
import HomePage from '../screens/homePage';
import SettingsPage from '../screens/SettingsPage';
import PaymentPage from '../screens/PaymentPage';
import ParkingSpot from '../screens/ParkingSpot';
import screenOptions from '../components/tabBar';
import { tabBar } from '../styles/tabBar';

const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOptions(route, color),
            headerShown: false,
            tabBarStyle: tabBar,
            tabBarInactiveTintColor: '#eeeeee'
        })} >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Payment" component={PaymentPage} />
            <Tab.Screen name="Parking" component={ParkingSpot} />
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    );
}

export default AppStack;

