import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

import { logoutButton, logoutButtonText } from '../styles/buttons';
import { settingsArea } from '../styles/layout';
const SettingsPage = ({ navigation }) => {

    const { logout } = useContext(AuthContext);

    return (
        <SafeAreaView style={settingsArea}>
            <TouchableOpacity style={logoutButton} onPress={() => logout()}>
                <Text style={logoutButtonText}>Log out</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default SettingsPage
