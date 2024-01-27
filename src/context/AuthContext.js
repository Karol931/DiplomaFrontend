import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import axios from "axios";

// domain
import { BASE_URL } from '../config';



export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [userToken, setUserToken] = useState(null);
    const [id, setId] = useState(null);

    const checkToken = async () => {

        accessToken = await AsyncStorage.getItem("userToken");

        const params = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                token: accessToken
            })
        };

        await fetch(`${BASE_URL}/api/users/token/verify/`, params)
            .then(response => {
                if (response.ok) {
                    return;
                }
                else {
                    refreshToken = AsyncStorage.getItem("refreshToken")
                        .then((refreshToken) => {
                            params['body'] = JSON.stringify({
                                refresh: refreshToken
                            });
                            fetch(`${BASE_URL}/api/users/token/refresh/`, params)
                                .then(response => {
                                    if (response.ok) {
                                        response.json()
                                            .then(data => {
                                                setUserToken(data["access"])
                                                AsyncStorage.setItem("userToken", data["access"]);
                                                return;
                                            })
                                    }
                                    else {
                                        response.json()
                                            .then(data => {
                                                console.log(data);
                                                logout();
                                                return false;
                                            })
                                    }
                                })
                        })
                }
            }).catch(error => console.error(error));
    }

    const login = async (email, password) => {

        const params = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: email,
                password: password,
            })
        };

        // console.log(params)

        await fetch(`${BASE_URL}/api/users/login/`, params)
            .then(response => {
                if (response.ok) {
                    // console.log(response)
                    response.json()
                        .then(data => {
                            const accessToken = data["access"];
                            const refreshToken = data["refresh"];
                            setUserToken(accessToken);
                            // console.log(data)
                            // console.log(userToken);
                            AsyncStorage.setItem('userToken', accessToken);
                            AsyncStorage.setItem('refreshToken', refreshToken);

                            params['body'] = JSON.stringify({
                                username: email
                            })
                            fetch(`${BASE_URL}/api/users/get_id/`, params)
                                .then(response => {
                                    if (response.ok) {
                                        response.json()
                                            .then(data => {
                                                console.log(data);
                                                setId(data['id']);
                                                console.log(String(data['id']))
                                                AsyncStorage.setItem('userId', String(data['id']));
                                            })
                                    }
                                    else {
                                        response.json()
                                            .then(data => {
                                                console.log(data);
                                            })
                                    }
                                })
                        })
                }
                else {
                    response.json()
                        .then(data => {
                            if (data.hasOwnProperty("username") && data.hasOwnProperty("password")) {
                                Alert.alert("Email and password may not be blank.");
                            }
                            else if (data.hasOwnProperty("username")) {
                                Alert.alert("Email may not be blank.");
                            }
                            else if (data.hasOwnProperty("password")) {
                                Alert.alert("Password may not be blank.");
                            }
                            else if (data.hasOwnProperty("detail")) {
                                Alert.alert(data["detail"]);
                            }
                        })
                }
            }).catch(error => console.error(error));

    }

    const logout = () => {
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('refreshToken');
        AsyncStorage.removeItem('userId');
        // console.log(userToken);
    }

    const isLoggedIn = async () => {
        try {
            setUserToken(await AsyncStorage.getItem('userToken'));
            setId(parseInt(await AsyncStorage.getItem('userId')));
            // console.log(parseInt(await AsyncStorage.getItem('userId')));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        isLoggedIn();
        // console.log(userToken)
    })



    return (
        <AuthContext.Provider value={{ login, logout, userToken, id, checkToken }}>
            {children}
        </AuthContext.Provider>
    )
}

