import React, { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
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
import { parkingOptionsArea } from '../styles/layout';
import { BASE_URL } from '../config';
import { AuthContext } from '../context/AuthContext';


const NewParkingPage = ({ navigation }) => {

    const [parkingName, setParkingName] = useState("");
    const [isPaid, setIsPaid] = useState(false);
    const [parkingOccupacy, setParkingOccupacy] = useState(null);
    const [parkingLevels, setParkingLevels] = useState(null);

    const { getNames } = useContext(AppContext);
    const { checkToken, userToken } = useContext(AuthContext);

    parkingOccupacyData = [
        { key: 0, value: '0%' },
        { key: 0.25, value: '25%' },
        { key: 0.5, value: '50%' },
        { key: 0.75, value: '75%' },
        { key: 1, value: '100%' },
    ]

    parkingLevelsData = [
        { key: 1, value: 1 },
        { key: 2, value: 2 },
        { key: 3, value: 3 },
        { key: 4, value: 4 },
        { key: 5, value: 5 },
    ]

    const corectForm = () => {
        if (parkingOccupacy === null || parkingName === "" || parkingLevels === null) {
            return false;
        }
        return true;
    }

    const createParking = async () => {

        if (!corectForm()) {
            Alert.alert("Values can't be empty");
            return;
        }

        if (await checkToken() === false) {
            return;
        }

        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
            body: JSON.stringify({
                isPaid: isPaid,
                name: parkingName,
                levels: parkingLevels,
                occupacy: parkingOccupacy
            })
        };

        // console.log(params)

        await fetch(`${BASE_URL}/api/parking/create/`, params)
            .then(response => {
                if (response.ok) {
                    // console.log(response)
                    response.json()
                        .then(data => {
                            if ("err" in data) {
                                Alert.alert(data['err']);
                            }
                            else {
                                getNames();
                                navigation.navigate('Home');
                            }
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            // console.log(data);
                        })
                }
            }).catch(error => console.error(error));

    }

    return (
        <SafeAreaView style={homeArea}>
            <Text>Welcome to Car Park</Text>
            <FontAwesome5 name="car" size={100} color='#393e46' />
            <Text style={{ marginBottom: 20 }}>Add new parking</Text>
            <View style={changeSettingsArea}>
                <TextInput style={settingsTextInput} placeholder='Parking name' value={parkingName} onChangeText={(text) => setParkingName(text)}></TextInput>
                <Text>Is parking paid</Text>
                <Checkbox onValueChange={(val) => setIsPaid(val)} value={isPaid} color={isPaid ? '#0092ca' : undefined}></Checkbox>
                <View style={[parkingOptionsArea, { gap: 20 }]}>
                    <View>
                        <Text>Occupacy:</Text>
                        <SelectList
                            setSelected={(val) => setParkingOccupacy(val)}
                            data={parkingOccupacyData}
                            save='value'
                            placeholder='- -'
                            searchPlaceholder=''
                            maxHeight={150}
                            boxStyles={parkingSelectList}
                            dropdownStyles={dropDownSelectList2}
                        />
                    </View>
                    <View>
                        <Text>Levels:</Text>
                        <SelectList
                            setSelected={(val) => setParkingLevels(val)}
                            data={parkingLevelsData}
                            save='value'
                            placeholder='- -'
                            searchPlaceholder=''
                            maxHeight={150}
                            boxStyles={parkingSelectList}
                            dropdownStyles={dropDownSelectList}
                        />
                    </View>
                </View>
                <TouchableOpacity style={confirmButton} onPress={createParking}>
                    <Text style={confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default NewParkingPage
