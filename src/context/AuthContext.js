import React, { createContext, useContext, useState } from "react";


import { BASE_URL } from '../config';
import { Alert } from "react-native";
import { loginButton } from "../styles/buttons";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (username, password) => {
        const params = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }
        // console.log(params)
        try {
            await fetch(`${BASE_URL}/api/users/login/`, params)
                .then(response => {
                    if (response.ok) {
                        // console.log(response)
                        response.json()
                            .then(data => {
                                setUserToken(data["access"])
                                console.log(userToken)
                                setIsLoggedIn(true)
                            })
                    }
                    else {
                        response.json()
                            .then(data => {
                                if (data.hasOwnProperty("username") && data.hasOwnProperty("password")) {
                                    Alert.alert("Username and password may not be blank.")
                                }
                                else if (data.hasOwnProperty("username")) {
                                    Alert.alert("Username may not be blank.")
                                }
                                else if (data.hasOwnProperty("password")) {
                                    Alert.alert("Password may not be blank.")
                                }
                                else if (data.hasOwnProperty("detail")) {
                                    Alert.alert(data["detail"])
                                }
                            })
                    }
                }).catch(error => console.error(error))
        }
        catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        setUserToken(null)
    }

    return (
        <AuthContext.Provider value={{ login, logout, userToken }}>
            {children}
        </AuthContext.Provider>
    )
}

