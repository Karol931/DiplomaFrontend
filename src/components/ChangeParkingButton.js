import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// components
import { AuthContext } from '../context/AuthContext';
import { AppContext } from '../context/AppContext';

// styles
import { changeParkingButton, changeParkingButtonText, } from '../styles/buttons';

const ChangeParkingButton = () => {

    const { changeParking } = useContext(AppContext);

    return (
        <TouchableOpacity style={changeParkingButton} onPress={() => { changeParking() }}>
            <Text style={changeParkingButtonText}>Change parking</Text>
        </TouchableOpacity>
    )
}

export default ChangeParkingButton;
