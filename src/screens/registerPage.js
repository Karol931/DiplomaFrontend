import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

// components
import LoginRegisterLogo from '../components/LoginRegisterLogo';

// styles
import { loginRegisterContainer, loginRegisterArea, loginRegisterSwitch } from '../styles/layout';
import { loginRegisterButton, loginRegisterButtonText } from '../styles/buttons';
import { loginRegisterTextInput } from '../styles/textInput';
import { BASE_URL } from '../config';
import isEmail from 'validator/lib/isEmail';

const validator = require("validator")

const RegisterPage = ({ navigation }) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegistration = async () => {

        if (isPasswordValid() && isEmailValid()) {
            const params = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: email,
                    password: password,
                })
            }
            console.log(params)
            try {
                await fetch(`${BASE_URL}/api/users/register/`, params)
                    .then(response => {
                        if (response.ok) {
                            navigation.navigate("Login")
                            Alert.alert("Succesfuly created account")
                        }
                        else {
                            response.json()
                                .then(data => {
                                    console.log(data)
                                    Alert.alert(data['email'][0])
                                })
                        }
                    }).catch(error => console.error(error))
            }
            catch (error) {
                console.log(error)
            }
        }


    }

    const isPasswordValid = () => {
        if (password != confirmPassword) {
            Alert.alert("Passwords must match");
            return false;
        }
        else {
            return true;
        }
    }

    const isEmailValid = () => {
        if (!validator.isEmail(email)) {
            Alert.alert("Email is not valid");
            return false;
        }
        else {
            return true;
        }
    }

    return (
        <SafeAreaView style={loginRegisterContainer}>
            <LoginRegisterLogo />
            <View style={loginRegisterArea}>
                <TextInput style={loginRegisterTextInput} placeholder='Email' value={email} onChangeText={(text) => setEmail(text)}></TextInput>
                <TextInput style={loginRegisterTextInput} placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                <TextInput style={loginRegisterTextInput} placeholder='Confirm password' secureTextEntry={true} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)}></TextInput>
                <TouchableOpacity style={loginRegisterButton} onPress={handleRegistration}>
                    <Text style={loginRegisterButtonText}>Register</Text>
                </TouchableOpacity>
                <View style={loginRegisterSwitch}>
                    <Text >You have an account already?</Text>
                    <TouchableOpacity style={loginRegisterButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={loginRegisterButtonText}>Log in now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    );
}

export default RegisterPage