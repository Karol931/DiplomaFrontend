import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from 'react-native';

// components
import LoginRegisterLogo from '../components/LoginRegisterLogo';
import { AuthContext } from '../context/AuthContext';


// styles
import { loginRegisterContainer, loginRegisterArea, loginRegisterSwitch } from '../styles/layout';
import { loginRegisterButton, loginRegisterButtonText } from '../styles/buttons';
import { loginRegisterTextInput } from '../styles/textInput';

const LoginPage = ({ navigation }) => {

    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={loginRegisterContainer}>
            <LoginRegisterLogo />
            <View style={loginRegisterArea}>
                <TextInput style={loginRegisterTextInput} placeholder='Email' value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput style={loginRegisterTextInput} placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                <TouchableOpacity style={loginRegisterButton} onPress={() => { login(email, password) }}>
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
