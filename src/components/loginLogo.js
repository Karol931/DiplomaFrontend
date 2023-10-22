import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const LoginLogo = () => {
    return (
        <View style={styles.title}>
            <Text style={styles.titleText}>
                {`Car Park \n`}
                <FontAwesome5 name="car" size={100} color='#eeeeee' />
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        backgroundColor: '#0092ca',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 80,
        color: '#eeeeee',
        textAlign: 'center'
    }
})

export default LoginLogo