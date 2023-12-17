import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

// domain
import { BASE_URL } from '../config';
import { AuthContext } from "./AuthContext";



export const AppContext = createContext();


export const AppProvider = ({ children }) => {


    const [parkingNames, setParkingNames] = useState([]);
    const [parkingName, setParkingName] = useState(null);

    const { checkToken, userToken, id } = useContext(AuthContext);

    const changeParking = async () => {
        setParkingName(null);
        AsyncStorage.removeItem('parkingName');

        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
            body: JSON.stringify({
                id: id
            })
        };

        await fetch(`${BASE_URL}/api/parking/delete_spot/`, params)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            // console.log(data);
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            console.log(data);
                            // Alert.alert(data);
                        })
                }
            }).catch(error => console.error(error));

        params['body'] = JSON.stringify({
            userId: id,
            parkingName: parkingName
        })

        await fetch(`${BASE_URL}/api/reservations/cancel_reservation/`, params)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            // console.log(data);
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            console.log(data);
                            // Alert.alert(data);
                        })
                }
            }).catch(error => console.error(error));
    }

    const chooseParking = (parkingName) => {
        setParkingName(parkingName);
        AsyncStorage.setItem('parkingName', parkingName);
    }

    const getNames = async () => {

        if (await checkToken() === false) {
            return
        }


        params = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + userToken
            },
        }

        await fetch(`${BASE_URL}/api/parking/get_names/`, params)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            // console.log(data);
                            setParkingNames(data['names']);
                            // console.log(parkingNames);
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            // console.log(data);
                            Alert.alert(data);
                        })
                }
            }).catch(error => console.error(error));

    }

    useEffect(() => {
        getNames();
    }, [])

    return (
        <AppContext.Provider value={{ parkingNames, parkingName, chooseParking, changeParking, getNames }}>
            {children}
        </AppContext.Provider>
    )
}