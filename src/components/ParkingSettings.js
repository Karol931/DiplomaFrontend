import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Checkbox from 'expo-checkbox';

// styles
import { confirmButton, confirmButtonText } from '../styles/buttons';
import { changeSettingsArea } from '../styles/layout';
import { parkingSelectList, dropDownSelectList } from '../styles/selectList'

const ParkingSettings = () => {

    const [isParkingPaid, setIsParkingPaid] = useState(false);

    parkingData = [
        { key: '0%', value: '0%' },
        { key: '25%', value: '25%' },
        { key: '50%', value: '50%' },
        { key: '100%', value: '100%' },
    ]

    return (
        <View style={changeSettingsArea}>
            <View style={{ flex: 1, flexDirection: 'col', alignItems: 'flex-start', width: '80%' }}>
                <Text> Parking occupied spots percentage</Text>
                <SelectList
                    data={parkingData}
                    save='value'
                    placeholder='- -'
                    searchPlaceholder=''
                    maxHeight={150}
                    boxStyles={parkingSelectList}
                    dropdownStyles={dropDownSelectList}
                />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', width: '80%', top: 20 }}>
                <Checkbox onValueChange={setIsParkingPaid} value={isParkingPaid} color={isParkingPaid ? '#0092ca' : undefined}></Checkbox>
                <Text> Parking payment</Text>
            </View>

            <TouchableOpacity style={confirmButton}>
                <Text style={confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ParkingSettings;