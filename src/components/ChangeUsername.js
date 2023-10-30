import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

// styles
import { settingsTextInput } from '../styles/textInput';
import { confirmButton, confirmButtonText } from '../styles/buttons';
import { changeSettingsArea } from '../styles/layout';


const ChangeUsernameView = () => {

    const [username, setUsername] = useState("");
    const [confirmUsername, setConfirmUsername] = useState("");


    return (
        <View style={changeSettingsArea}>
            <TextInput style={settingsTextInput} placeholder='New username' value={username} onChangeText={(text) => setUsername(text)}></TextInput>
            <TextInput style={settingsTextInput} placeholder='Confirm new username' value={confirmUsername} onChangeText={(text) => setConfirmUsername(text)}></TextInput>
            <TouchableOpacity style={confirmButton}>
                <Text style={confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ChangeUsernameView;