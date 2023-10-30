import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// styles
import { loginRegisterLogo, loginRegisterLogoText } from '../styles/logo';


const LoginLogo = () => {
    return (
        <View style={loginRegisterLogo}>
            <Text style={loginRegisterLogoText}>
                {`Car Park \n`}
                <FontAwesome5 name="car" size={100} color='#eeeeee' />
            </Text>
        </View>
    );
}

export default LoginLogo