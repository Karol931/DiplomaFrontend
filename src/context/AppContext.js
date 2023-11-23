import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

// domain
import { BASE_URL } from '../config';



export const AppContext = createContext();


export const AppProvider = ({ children }) => {

    const [parking, setParking] = useState(null);

    const getParking = async () => {
        await fetch(`${BASE_URL}/api/parking/create`)
            .then(response => {
                if (response.ok) {
                    // console.log(response)
                    response.json().then(data =>
                        setParking(data["parking"]))
                }
                else {
                    response.json()
                        .then(data => {
                            console.log(data)
                            Alert.alert(data)
                        })
                }
            })
    }
    useEffect(() => {
        getParking();
    }, [])

    return (
        <AppContext.Provider value={{ parking }}>
            {children}
        </AppContext.Provider>
    )
}