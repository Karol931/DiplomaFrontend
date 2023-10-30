import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from "@expo/vector-icons";

// components
import HomePage from '../screens/homePage';
import SettingsPage from '../screens/SettingsPage';
import PaymentPage from '../screens/PaymentPage';
import ParkingSpot from '../screens/ParkingPage';

// styles
import { tabBar } from '../styles/tabBar';


const Tab = createBottomTabNavigator();

const AppStack = () => {

    const screenOptions = (route, color) => {
        let iconName;

        switch (route.name) {
            case 'Home':
                iconName = 'home';
                break;
            case 'Payment':
                iconName = 'credit-card';
                break;
            case 'Settings':
                iconName = 'cog';
                break;
            case 'Parking':
                iconName = 'parking';
                break;
            default:
                iconName = ''
                break;
        }

        return <FontAwesome5 name={iconName} size={20} color={color} />

    };

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOptions(route, color),
            headerShown: false,
            tabBarStyle: tabBar,
            tabBarInactiveTintColor: '#eeeeee'
        })} >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Parking" component={ParkingSpot} />
            <Tab.Screen name="Payment" component={PaymentPage} />
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    );
}

export default AppStack;

