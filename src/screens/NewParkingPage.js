import React, { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
import Checkbox from 'expo-checkbox';
// styles
import { homeArea } from '../styles/layout';
import { AppContext } from '../context/AppContext';
import { dropDownSelectList, dropDownSelectList2 } from '../styles/selectList';
import { changeSettingsArea } from '../styles/layout';
import { confirmButton, confirmButtonText } from '../styles/buttons';
import { settingsTextInput } from '../styles/textInput';
import { parkingSelectList } from '../styles/selectList';

const NewParkingPage = ({ navigation }) => {

    const [parkingName, setParkingName] = useState("");
    const [isPaid, setIsPaid] = useState(null);
    const [parkingOccupacy, setParkingOccupacy] = useState(null);
    parkingData = [
        { key: 0, value: '0%' },
        { key: 0.25, value: '25%' },
        { key: 0.5, value: '50%' },
        { key: 0.75, value: '75%' },
        { key: 1, value: '100%' },
    ]

    return (
        <SafeAreaView style={homeArea}>
            <Text>Welcome to Car Park</Text>
            <FontAwesome5 name="car" size={100} color='#393e46' />
            <Text style={{ marginBottom: 20 }}>Add new parking</Text>
            <View style={changeSettingsArea}>
                <TextInput style={settingsTextInput} placeholder='Parking name' value={parkingName} onChangeText={(text) => setParkingName(text)}></TextInput>
                <Text>Is parking paid</Text>
                <Checkbox onValueChange={setIsPaid} value={isPaid} color={isPaid ? '#0092ca' : undefined}></Checkbox>
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
                <TouchableOpacity style={confirmButton}>
                    <Text style={confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default NewParkingPage
