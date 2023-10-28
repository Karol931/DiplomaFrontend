import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';


import LoginLogo from '../components/loginLogo';

// styles
import { loginContainer, loginArea, textCenter } from '../styles/layout';
import { loginButton, loginButtonText } from '../styles/buttons';
import { loginTextInput } from '../styles/textInput';
import { BASE_URL } from '../config';


const RegisterPage = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegistration = async () => {

        if (password != confirmPassword) {
            Alert.alert("Passwords must match")
        }
        else {
            const params = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
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
                                    Alert.alert(data['username'][0])
                                })
                        }
                    }).catch(error => console.error(error))
            }
            catch (error) {
                console.log(error)
            }
        }


    }

    return (
        <SafeAreaView style={loginContainer}>
            <LoginLogo></LoginLogo>
            <View style={loginArea}>
                <TextInput style={loginTextInput} placeholder='Username' value={username} onChangeText={(text) => setUsername(text)}></TextInput>
                <TextInput style={loginTextInput} placeholder='Password' secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                <TextInput style={loginTextInput} placeholder='Confirm password' secureTextEntry={true} value={confirmPassword} onChangeText={(text) => setConfirmPassword(text)}></TextInput>
                <TouchableOpacity style={loginButton} onPress={handleRegistration}>
                    <Text style={loginButtonText}>Register</Text>
                </TouchableOpacity>
                <View>
                    <Text style={textCenter}>You have an account already?</Text>
                    <TouchableOpacity style={loginButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={loginButtonText}>Log in now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    );
}

export default RegisterPage