import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components
import AppLogo from '../components/AppLogo';
import ChangePassword from '../components/ChangePassword';
import ParkingSettings from '../components/ParkingSettings';

// styles
import { settingsButton, settingsButtonText } from '../styles/buttons';
import { appContainer, settingsArea, barContainer } from '../styles/layout';


const SettingsPage = ({ navigation }) => {

    const [tab, setTab] = useState(null);

    return (
        <SafeAreaView style={appContainer}>
            <AppLogo />
            <View style={settingsArea}>
                <TouchableOpacity style={settingsButton} onPress={() => setTab('password')}>
                    <Text style={settingsButtonText}>Change password</Text>
                </TouchableOpacity>
                {tab === 'password' ? <ChangePassword /> : ''}
            </View>
            <View style={barContainer} />
        </SafeAreaView >
    );
}

export default SettingsPage
