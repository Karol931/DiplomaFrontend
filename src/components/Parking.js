import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import Swiper from 'react-native-swiper'

// components
import { ParkingContext } from '../context/ParkingContext';

// styles
import { parkingSpotArea, parkingSpotContainer } from '../styles/layout';
import { corner, midVerticalRoad, sideVerticalRoad, horizontalRoad, spot, verticalContainer, horizontalContainer, parkingSpotText, cornerText, free, taken, users } from '../styles/parking';
import { AuthContext } from '../context/AuthContext';
//18 flex w kazdym

const Parking = () => {

    const { parking, loading } = useContext(ParkingContext);
    const { id } = useContext(AuthContext);

    const spotTaken = (spot) => {
        if (spot.user_id === id)
            return users;
        else if (spot.is_taken)
            return taken;
        return free;
    }

    const getSpot = (level, zone, number) => {
        const zones = level.zones.find(zones => zones.zone === zone);
        const spot = zones.spots.find(spots => spots.number === number);
        return spot;
    }

    const exitOnBottom = (level) => {
        if (level.level % 2 === 0)
            return true
        return false
    }



    return (
        <View style={parkingSpotContainer} horizontal={true}>

            <Swiper loop={false} showsButtons={true} showsPagination={false} buttonWrapperStyle={{ paddingHorizontal: 5 }}>
                {parking.map(level => {
                    return (
                        <View style={parkingSpotArea}>
                            <Text>{level['level']}</Text>


                            <View key={level.level} style={verticalContainer}>
                                <View style={corner}><Text style={cornerText}>Zone A</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'A', 6))]}><Text style={parkingSpotText}>A6</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'A', 5))]}><Text style={parkingSpotText}>A5</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'A', 4))]}><Text style={parkingSpotText}>A4</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'A', 3))]}><Text style={parkingSpotText}>A3</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'A', 2))]}><Text style={parkingSpotText}>A2</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'A', 1))]}><Text style={parkingSpotText}>A1</Text></View>

                                <View style={midVerticalRoad}>
                                    {
                                        exitOnBottom(level) ? <Text style={{ textAlign: 'center' }}>Entr</Text> : <Text style={{ textAlign: 'center' }}>Next Lvl</Text>
                                    }
                                </View>

                                <View style={[spot, spotTaken(getSpot(level, 'B', 1))]}><Text style={parkingSpotText}>B1</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'B', 2))]}><Text style={parkingSpotText}>B2</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'B', 3))]}><Text style={parkingSpotText}>B3</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'B', 4))]}><Text style={parkingSpotText}>B4</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'B', 5))]}><Text style={parkingSpotText}>B5</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'B', 6))]}><Text style={parkingSpotText}>B6</Text></View>
                                <View style={corner}><Text style={cornerText}>Zone  B</Text></View>
                            </View>


                            <View style={verticalContainer}>
                                <View style={horizontalContainer}>
                                    <View style={[spot, spotTaken(getSpot(level, 'A', 7))]}><Text style={parkingSpotText}>A7</Text></View>
                                    <View style={[spot, spotTaken(getSpot(level, 'A', 8))]}><Text style={parkingSpotText}>A8</Text></View>
                                </View>

                                <View style={horizontalRoad}></View>

                                <View style={horizontalContainer}>
                                    <View style={[spot, spotTaken(getSpot(level, 'B', 7))]}><Text style={parkingSpotText}>B7</Text></View>
                                    <View style={[spot, spotTaken(getSpot(level, 'B', 8))]}><Text style={parkingSpotText}>B8</Text></View>
                                </View>
                            </View>


                            <View style={verticalContainer}>
                                <View style={horizontalContainer}>
                                    <View style={[spot, spotTaken(getSpot(level, 'A', 9))]}><Text style={parkingSpotText}>A9</Text></View>
                                    <View style={[spot, spotTaken(getSpot(level, 'A', 10))]}><Text style={parkingSpotText}>A10</Text></View>
                                </View>

                                <View style={sideVerticalRoad}></View>

                                <View style={[spot, spotTaken(getSpot(level, 'A', 11))]}><Text style={parkingSpotText}>A 11</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'A', 12))]}><Text style={parkingSpotText}>A 12</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'A', 13))]}><Text style={parkingSpotText}>A 13</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'A', 14))]}><Text style={parkingSpotText}>A 14</Text></View>

                                <View style={midVerticalRoad}></View>

                                <View style={[spot, spotTaken(getSpot(level, 'B', 14))]}><Text style={parkingSpotText}>B 14</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'B', 13))]}><Text style={parkingSpotText}>B 13</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'B', 12))]}><Text style={parkingSpotText}>B 12</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'B', 11))]}><Text style={parkingSpotText}>B 11</Text></View>

                                <View style={sideVerticalRoad}></View>

                                <View style={horizontalContainer}>
                                    <View style={[spot, spotTaken(getSpot(level, 'B', 9))]}><Text style={parkingSpotText}>B9</Text></View>
                                    <View style={[spot, spotTaken(getSpot(level, 'B', 10))]}><Text style={parkingSpotText}>B10</Text></View>
                                </View>


                            </View>
                            <View style={verticalContainer}>

                                <View style={horizontalContainer}>
                                    <View style={[spot, spotTaken(getSpot(level, 'D', 10))]}><Text style={parkingSpotText}>D10</Text></View>
                                    <View style={[spot, spotTaken(getSpot(level, 'D', 9))]}><Text style={parkingSpotText}>D9</Text></View>
                                </View>

                                <View style={sideVerticalRoad}></View>

                                <View style={[spot, spotTaken(getSpot(level, 'D', 11))]}><Text style={parkingSpotText}>D 11</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'D', 12))]}><Text style={parkingSpotText}>D 12</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'D', 13))]}><Text style={parkingSpotText}>D 13</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'D', 14))]}><Text style={parkingSpotText}>D 14</Text></View>

                                <View style={midVerticalRoad}></View>

                                <View style={[spot, spotTaken(getSpot(level, 'C', 14))]}><Text style={parkingSpotText}>C 14</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'C', 13))]}><Text style={parkingSpotText}>C 13</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'C', 12))]}><Text style={parkingSpotText}>C 12</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'C', 11))]}><Text style={parkingSpotText}>C 11</Text></View>

                                <View style={sideVerticalRoad}></View>

                                <View style={horizontalContainer}>
                                    <View style={[spot, spotTaken(getSpot(level, 'C', 10))]}><Text style={parkingSpotText}>C 10</Text></View>
                                    <View style={[spot, spotTaken(getSpot(level, 'C', 9))]}><Text style={parkingSpotText}>C 9</Text></View>
                                </View>
                            </View>


                            <View style={verticalContainer}>
                                <View style={horizontalContainer}>
                                    <View style={[spot, spotTaken(getSpot(level, 'D', 8))]}><Text style={parkingSpotText}>D8</Text></View>
                                    <View style={[spot, spotTaken(getSpot(level, 'D', 7))]}><Text style={parkingSpotText}>D7</Text></View>
                                </View>

                                <View style={horizontalRoad}></View>

                                <View style={horizontalContainer}>
                                    <View style={[spot, spotTaken(getSpot(level, 'C', 8))]}><Text style={parkingSpotText}>C8</Text></View>
                                    <View style={[spot, spotTaken(getSpot(level, 'C', 7))]}><Text style={parkingSpotText}>C7</Text></View>
                                </View>
                            </View>


                            <View style={verticalContainer}>
                                <View style={corner}><Text style={cornerText}>Zone D</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'D', 6))]}><Text style={parkingSpotText}>D6</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'D', 5))]}><Text style={parkingSpotText}>D5</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'D', 4))]}><Text style={parkingSpotText}>D4</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'D', 3))]}><Text style={parkingSpotText}>D3</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'D', 2))]}><Text style={parkingSpotText}>D2</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'D', 1))]}><Text style={parkingSpotText}>D1</Text></View>

                                <View style={midVerticalRoad}>
                                    {
                                        !exitOnBottom(level) ? <Text style={{ textAlign: 'center' }}>Entr</Text> : <Text style={{ textAlign: 'center' }}>Next Lvl</Text>
                                    }
                                </View>

                                <View style={[spot, spotTaken(getSpot(level, 'C', 1))]}><Text style={parkingSpotText}>C1</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'C', 2))]}><Text style={parkingSpotText}>C2</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'C', 3))]}><Text style={parkingSpotText}>C3</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'C', 4))]}><Text style={parkingSpotText}>C4</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'C', 5))]}><Text style={parkingSpotText}>C5</Text></View>
                                <View style={[spot, spotTaken(getSpot(level, 'C', 6))]}><Text style={parkingSpotText}>C6</Text></View>
                                <View style={corner}><Text style={cornerText}>Zone C</Text></View>
                            </View>
                        </View >
                    )
                })}
                {/* {console.log(parkingView())} */}

            </Swiper>
        </View>

    );
}

export default Parking