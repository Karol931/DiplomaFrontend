import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list';

// components
import AppLogo from '../components/AppLogo';

// styles
import { appContainer, parkingOptionsArea, parkingArea, parkingContainer, parkingSpot, barContainer, parkingSpotContainer, parkingSpotArea } from '../styles/layout';
import { parkingSelectList } from '../styles/selectList';
import { parkingButton, parkingButtonText } from '../styles/buttons';
import { parkingSpotText } from '../styles/text';


const ParkingSpot = ({ navigation }) => {

    const [level, setLevel] = useState('');
    const [zone, setZone] = useState('');

    const levelData = [
        { key: '1', value: 1 },
        { key: '2', value: 2 },
        { key: '3', value: 3 },
        { key: '4', value: 4 },
    ]

    const zoneData = [
        { key: 'A', value: 'A' },
        { key: 'B', value: 'B' },
        { key: 'C', value: 'C' },
        { key: 'D', value: 'D' },
    ]

    return (
        <SafeAreaView style={appContainer}>
            <AppLogo />
            <View style={parkingContainer}>
                <View style={parkingArea}>
                    <View style={parkingOptionsArea}>
                        <View>
                            <Text>Level:</Text>
                            <SelectList
                                setSelected={(val) => setLevel(val)}
                                data={levelData}
                                save='value'
                                placeholder='- -'
                                searchPlaceholder=''
                                maxHeight={150}
                                boxStyles={parkingSelectList}
                            />
                        </View>
                        <View>
                            <Text>Zone:</Text>
                            <SelectList
                                setSelected={(val) => setZone(val)}
                                data={zoneData}
                                save='value'
                                placeholder='- -'
                                searchPlaceholder=''
                                maxHeight={150}
                                boxStyles={parkingSelectList}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={parkingButton}>
                        <Text style={parkingButtonText}>Find parking spot</Text>
                    </TouchableOpacity>
                </View>
                <View style={parkingSpotContainer}>
                    <View style={parkingSpotArea}>
                        <View>
                            <Text style={parkingSpotText}>Level:</Text>
                            <Text style={parkingSpotText}>{level}</Text>
                        </View>
                        <View>
                            <Text style={parkingSpotText}>Spot:</Text>
                            <Text style={parkingSpotText}>{zone} 15</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={barContainer} />
        </SafeAreaView>
    );
}

export default ParkingSpot
