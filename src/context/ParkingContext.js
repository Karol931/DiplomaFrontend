
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

// domain
import { BASE_URL } from '../config';
import { AppContext } from "./AppContext";
import { AuthContext } from "./AuthContext";



export const ParkingContext = createContext();


export const ParkingProvider = ({ children }) => {

    const [parking, setParking] = useState([]);
    const [isPaid, setIsPaid] = useState(null);
    const { parkingName } = useContext(AppContext);
    const getParking = async () => {
        console.log(parkingName)
        await fetch(`${BASE_URL}/api/parking/get_parking/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: parkingName
            }),
        })
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            setParking(data['levels']);
                            setIsPaid(data['is_paid']);
                            return
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

    useEffect(async () => {
        await getParking();
    }, [])

    return (
        <ParkingContext.Provider value={{ parking, isPaid }}>
            {children}
        </ParkingContext.Provider>
    )
}