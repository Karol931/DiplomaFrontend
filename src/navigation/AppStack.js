import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from "@expo/vector-icons";

// components
import SettingsPage from '../screens/SettingsPage';
import PaymentPage from '../screens/PaymentPage';
import ParkingSpot from '../screens/ParkingPage';

// components
import { ParkingContext, ParkingProvider } from '../context/ParkingContext';

// styles
import { tabBar } from '../styles/tabBar';


const Tab = createBottomTabNavigator();

const AppStack = () => {

    const { isPaid } = useContext(ParkingContext);

    const screenOptions = (route, color) => {
        let iconName;

        switch (route.name) {
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
            <Tab.Screen name="Parking" component={ParkingSpot} />
            {isPaid ? <Tab.Screen name="Payment" component={PaymentPage} /> : null}
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    );
}

export default AppStack;

