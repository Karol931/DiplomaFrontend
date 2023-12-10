import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from "@expo/vector-icons";

// components
import HomePage from '../screens/HomePage';
import SettingsPage from '../screens/SettingsPage';
import PaymentPage from '../screens/PaymentPage';
import ParkingSpot from '../screens/ParkingPage';

// styles
import { tabBar } from '../styles/tabBar';
import { AppProvider } from '../context/AppContext';
import NewParkingPage from '../screens/NewParkingPage';


const Tab = createBottomTabNavigator();

const HomeStack = () => {

    const screenOptions = (route, color) => {
        let iconName;

        switch (route.name) {
            case 'Home':
                iconName = 'home';
                break;
            case 'Add parking':
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
            <Tab.Screen name="Add parking" component={NewParkingPage} />
        </Tab.Navigator>
    );
}

export default HomeStack;

