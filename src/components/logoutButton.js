import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// components
import { AuthContext } from '../context/AuthContext';

// styles
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