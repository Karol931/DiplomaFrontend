
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
    const [shops, setShops] = useState([]);
    const [levels, setLevels] = useState([]);
    const [zones, setZones] = useState([])
    const [loading, setLoading] = useState(true)


    const { parkingName } = useContext(AppContext);
    const { checkToken, userToken, id } = useContext(AuthContext);


    const getParking = async () => {

        if (await checkToken() === false) {
            return
        }

        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + userToken
            },
            body: JSON.stringify({
                name: parkingName,
            }),
        }
        await fetch(`${BASE_URL}/api/parking/get_parking/`, params)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            setParking(data['levels']);
                            setIsPaid(data['is_paid']);
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

    const findSpot = async (index, shop, zone, level) => {

        if (await checkToken() === false) {
            return
        }

        let body = {
            parkingName: parkingName,
            userId: id,
            level: level
        }

        if (index === 0) {
            body['zone'] = zone
        }
        else {
            body['shop'] = shop
        }

        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify(body),
        }

        await fetch(`${BASE_URL}/api/parking/find_spot/`, params)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            getParking();
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            Alert.alert(data['err']);
                            return;
                        })
                }
            }).catch(error => console.error(error));
    }

    const getParkingOptions = async () => {

        if (await checkToken() === false) {
            return
        }

        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify({
                parkingName: parkingName
            })
        }
        await fetch(`${BASE_URL}/api/parking/get_parking_options/`, params)
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(data => {
                            // console.log(data);
                            setShops(data['shops']);
                            setLevels(data['levels']);
                            setZones(data['zones']);
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            // console.log(data)
                        })
                }
            }).catch(error => console.error(error));
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            await getParking();
            await getParkingOptions();
        }
        fetchData().then(() =>
            setLoading(false));
    }, [])

    return (
        <ParkingContext.Provider value={{ parking, isPaid, findSpot, shops, zones, levels, loading }}>
            {children}
        </ParkingContext.Provider>
    )
}