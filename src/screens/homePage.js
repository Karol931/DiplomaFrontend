import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../context/AuthContext';


const HomePage = () => {

    const { userToken, logout } = useContext(AuthContext)

    return (
        <View style={{ backgroundColor: 'blue' }}>
            <Text style={{ color: 'white' }}>{userToken}</Text>
            <Button onPress={() => { logout }} title="Logout">Logout</Button>
        </View>
    );
}

export default HomePage
