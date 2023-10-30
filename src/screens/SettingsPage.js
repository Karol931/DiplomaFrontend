import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import AppLogo from '../components/appLogo';
import ChangeUsernameView from '../components/ChangeUsername';
import ChangePasswordView from '../components/ChangePassword';

// styles
import { settingsButton, settingsButtonText } from '../styles/buttons';
import { settingsArea, settingsContainer } from '../styles/layout';


const SettingsPage = ({ navigation }) => {

    const [tab, setTab] = useState('password');

    return (
        <SafeAreaView style={settingsContainer}>
            <AppLogo />
            <View style={settingsArea}>
                <TouchableOpacity style={settingsButton} onPress={() => setTab(null)}>
                    <Text style={settingsButtonText}>Reload parking spots</Text>
                </TouchableOpacity>
                <TouchableOpacity style={settingsButton} onPress={() => setTab('username')}>
                    <Text style={settingsButtonText}>Change username</Text>
                </TouchableOpacity>
                <TouchableOpacity style={settingsButton} onPress={() => setTab('password')}>
                    <Text style={settingsButtonText}>Change password</Text>
                </TouchableOpacity>
                {tab === 'username' ? <ChangeUsernameView /> : ''}
                {tab === 'password' ? <ChangePasswordView /> : ''}
            </View>
        </SafeAreaView >
    );
}

export default SettingsPage
