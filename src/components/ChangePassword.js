import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

// styles
import { settingsTextInput } from '../styles/textInput';
import { confirmButton, confirmButtonText } from '../styles/buttons';
import { changeSettingsArea } from '../styles/layout';


const ChangePassword = () => {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    return (
        <View style={changeSettingsArea}>
            <TextInput style={settingsTextInput} placeholder='New password' value={password} onChangeText={(text) => setPassword(text)}></TextInput>
            <TextInput style={settingsTextInput} placeholder='Confirm new password' value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)}></TextInput>
            <TouchableOpacity style={confirmButton}>
                <Text style={confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChangePassword;