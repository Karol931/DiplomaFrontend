import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Alert } from 'react-native';
import LoginLogo from '../components/loginLogo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RegisterPage = ({ navigation }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = async () => {

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
            await fetch('http://10.0.2.2:8000/api/users/register/', params)
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

    return (
        <View style={styles.container}>
            <LoginLogo></LoginLogo>
            <View style={styles.loginArea}>
                <TextInput style={styles.textInput} placeholder='Username' value={username} onChangeText={(text) => setUsername(text)}></TextInput>
                <TextInput style={styles.textInput} placeholder='Password' value={password} onChangeText={(text) => setPassword(text)}></TextInput>
                <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{ textAlign: 'center' }}>You have an account already?</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>Log in now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'black'
    },
    loginArea: {
        flex: 2,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20
    },
    textInput: {
        borderColor: '#0092ca',
        width: 250,
        padding: 5,
        borderWidth: 2,
        borderRadius: 10,
    },
    button: {
        height: 40,
        width: 250,
        backgroundColor: '#0092ca',
        borderRadius: 10,
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#eeeeee',
    }
})

export default RegisterPage