import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';


import { AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';


import { homeArea } from '../styles/layout';


const HomePage = ({ navigation }) => {
    return (
        <SafeAreaView style={homeArea}>
            <Text>
                {`Welcome to Car Park \n`}
            </Text>
            <FontAwesome5 name="car" size={100} color='#393e46' />
        </SafeAreaView>
    );
}

export default HomePage
