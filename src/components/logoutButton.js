import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

import { logoutButton, logoutButtonText } from '../styles/buttons';

const LogoutButton = () => {

    const { logout } = useContext(AuthContext);

    return (
        <TouchableOpacity style={logoutButton} onPress={() => logout()}>
            <Text style={logoutButtonText}>Log out</Text>
        </TouchableOpacity>
    )
}

export default LogoutButton;