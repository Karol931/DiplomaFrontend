import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list';

// components
import AppLogo from '../components/AppLogo';
import Parking from '../components/Parking';

// styles
import { appContainer, parkingOptionsArea, parkingArea, parkingContainer, barContainer, parkingSpotContainer } from '../styles/layout';
import { parkingSelectList, dropDownSelectList, dropDownSelectList2 } from '../styles/selectList';
import { parkingButton, parkingButtonText } from '../styles/buttons';
import SpotOptions from '../components/SpotOptions';
import { AppContext } from '../context/AppContext';
import { ParkingContext } from '../context/ParkingContext';



const ParkingPage = ({ navigation }) => {

    const { loading } = useContext(ParkingContext);

    return (
        <SafeAreaView style={appContainer}>
            <AppLogo />
            <View style={parkingContainer}>
                <SpotOptions></SpotOptions>
                {loading ? <View style={[parkingSpotContainer, { alignItems: 'center', justifyContent: 'center' }]} horizontal={true}>
                    <Text>Loading...</Text></View> : <Parking></Parking>}
            </View>
            <View style={barContainer} />
        </SafeAreaView >
    );
}

export default ParkingPage
