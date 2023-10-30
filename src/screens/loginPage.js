import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';

// components
import LoginLogo from '../components/loginRegisterLogo';
import { AuthContext } from '../context/AuthContext';


// styles
import { loginRegisterContainer, loginRegisterArea, loginRegisterSwitch } from '../styles/layout';
import { loginRegisterButton, loginRegisterButtonText } from '../styles/buttons';
import { loginRegisterTextInput } from '../styles/textInput';

const LoginPage = ({ navigation }) => {

    const { login } = useContext(AuthContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={loginRegisterContainer}>
            <LoginLogo></LoginLogo>
            <View style={loginRegisterArea}>
                <TextInput style={loginRegisterTextInput} placeholder='Username' value={username} onChangeText={(text) => setUsername(text)}></TextInput>
                <TextInput style={loginRegisterTextInput} placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                <TouchableOpacity style={loginRegisterButton} onPress={() => { login(username, password) }}>
                    <Text style={loginRegisterButtonText}>Log in</Text>
                </TouchableOpacity>
                <View style={loginRegisterSwitch}>
                    <Text>Don't have an account yet?</Text>
                    <TouchableOpacity style={loginRegisterButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={loginRegisterButtonText}>Register now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}


export default LoginPage