import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import LoginLogo from '../components/loginLogo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LoginPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <LoginLogo></LoginLogo>
            <View style={styles.loginArea}>
                <TextInput style={styles.textInput} placeholder='Login'></TextInput>
                <TextInput style={styles.textInput} placeholder='Password'></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{ textAlign: 'center' }}>Don't have an account yet?</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.buttonText}>Register now</Text>
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

export default LoginPage