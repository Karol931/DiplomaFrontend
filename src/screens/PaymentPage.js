import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components 
import AppLogo from '../components/AppLogo';

// styles
import { appContainer, barContainer, paymentArea, paymentSpotArea } from '../styles/layout';
import { paymentContainer, parkingSpotArea, paymentInputField } from '../styles/layout';
import { parkingSpotText } from '../styles/text';
import { parkingButton, parkingButtonText } from '../styles/buttons';
import { paymentTextInput } from '../styles/textInput';
import { AppContext } from '../context/AppContext';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../config';

const PaymentPage = ({ navigation }) => {

    const [hours, setHours] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const { parkingName } = useContext(AppContext);
    const { id, checkToken, userToken } = useContext(AuthContext);


    const reserveSpot = async () => {

        // if (await checkToken() === false) {
        //     return;
        // }

        console.log(hours);
        console.log(minutes);

        if (hours === null) {
            setHours('0');
        }

        if (minutes === null) {
            setMinutes('0');
        }

        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify({
                hours: hours,
                minutes: minutes,
                parkingName: parkingName,
                userId: id
            })
        }
        await fetch(`${BASE_URL}/api/reservations/create/`, params)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            console.log(data);
                            setEndDate(data['end_date']);
                            // console.log(String(endDate))
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            console.log(data)
                        })
                }
            }).catch(error => console.error(error));
    }

    const isReserved = async () => {

        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify({
                parkingName: parkingName,
                userId: id
            })
        }

        await fetch(`${BASE_URL}/api/reservations/get_reservation/`, params)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            console.log(data);
                            if (data['end_date'] === "doesn\'t exist") {
                                return;
                            }
                            else {
                                setEndDate(data['end_date']);
                            }
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            console.log(data);
                        })
                }
            }).catch(error => console.error(error));
    }

    useEffect(() => {
        if (endDate === null) {
            isReserved()
        }
    })

    const displayDate = () => {
        if (endDate !== null) {
            let date = endDate.split("T");
            console.log(date);
            console.log(date[1]);
            date[1] = date[1].split(":");
            return "Date: " + date[0] + "\n" + "Time: " + date[1][0] + ":" + date[1][1];
        }
    }

    return (
        <SafeAreaView style={appContainer}>
            <AppLogo />
            <View style={paymentContainer}>
                <View style={paymentArea}>
                    <Text style={{ position: 'absolute', top: 40 }}>How long do u want to pay for?</Text>
                    <View style={paymentInputField}>
                        <Text>Hours:</Text>
                        <TextInput style={paymentTextInput} keyboardType='numeric' onChangeText={(text) => setHours(text)}></TextInput>
                    </View>
                    <View style={paymentInputField}>
                        <Text>Minutes:</Text>
                        <TextInput style={paymentTextInput} keyboardType='numeric' onChangeText={(text) => setMinutes(text)}></TextInput>
                    </View>
                    <TouchableOpacity style={parkingButton} onPress={() => { reserveSpot() }}>
                        <Text style={parkingButtonText}>Reserve</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20 }}>{displayDate()}</Text>
            </View>
            <View style={barContainer} />
        </SafeAreaView>
    );
}

export default PaymentPage
