import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';

import LoginLogo from '../components/loginLogo';
// styles
import { loginContainer, loginArea, textCenter } from '../styles/layout';
import { loginButton, loginButtonText } from '../styles/buttons';
import { loginTextInput } from '../styles/textInput';
import { AuthContext } from '../context/AuthContext';

const LoginPage = ({ navigation }) => {

    const { login } = useContext(AuthContext)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={loginContainer}>
            <LoginLogo></LoginLogo>
            <View style={loginArea}>
                <TextInput style={loginTextInput} placeholder='Username' value={username} onChangeText={(text) => setUsername(text)}></TextInput>
                <TextInput style={loginTextInput} placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                <TouchableOpacity style={loginButton} onPress={() => { login(username, password) }}>
                    <Text style={loginButtonText}>Log in</Text>
                </TouchableOpacity>
                <View>
                    <Text style={textCenter}>Don't have an account yet?</Text>
                    <TouchableOpacity style={loginButton} onPress={() => navigation.navigate('Register')}>
                        <Text style={loginButtonText}>Register now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}


export default LoginPage