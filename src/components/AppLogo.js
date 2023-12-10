import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// components
import LogoutButton from './LogoutButton';

// styles
import { appLogo, appLogoText } from '../styles/logo';
import ChangeParkingButton from './ChangeParkingButton';


const AppLogo = () => {
    return (
        <View style={appLogo}>
            <ChangeParkingButton />
            <Text style={appLogoText}>
                {`Car Park \t \t`}
                <FontAwesome5 name="car" size={24} color='#eeeeee' />
            </Text>
            <LogoutButton />
        </View>
    );
}

export default AppLogo
