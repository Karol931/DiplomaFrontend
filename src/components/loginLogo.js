import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


import { loginLogo, loginLogoText } from '../styles/logoStyles';


const LoginLogo = () => {
    return (
        <View style={loginLogo}>
            <Text style={loginLogoText}>
                {`Car Park \n`}
                <FontAwesome5 name="car" size={100} color='#eeeeee' />
            </Text>
        </View>
    );
}

export default LoginLogo