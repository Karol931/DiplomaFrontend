import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

// domain
import { BASE_URL } from '../config';



export const AppContext = createContext();


export const AppProvider = ({ children }) => {


    const [parkingNames, setParkingNames] = useState([]);
    const [parkingName, setParkingName] = useState(null);

    const changeParking = () => {
        setParkingName(null);
        AsyncStorage.removeItem('parkingName');
    }

    const chooseParking = (parkingName) => {
        setParkingName(parkingName);
        AsyncStorage.setItem('parkingName', parkingName);
    }

    const getNames = async () => {
        await fetch(`${BASE_URL}/api/parking/get_names/`)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            console.log(data)
                            setParkingNames(data['names']);
                            console.log(parkingNames);
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            console.log(data);
                            Alert.alert(data);
                        })
                }
            }).catch(error => console.error(error));
    }

    useEffect(() => {
        getNames();
    }, [])

    return (
        <AppContext.Provider value={{ parkingNames, parkingName, chooseParking, changeParking }}>
            {children}
        </AppContext.Provider>
    )
}