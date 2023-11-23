import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SelectList } from 'react-native-dropdown-select-list';

// components
import AppLogo from '../components/AppLogo';

// styles
import { appContainer, parkingOptionsArea, parkingArea, parkingContainer, parkingSpot, barContainer, parkingSpotContainer, parkingSpotArea, shopList } from '../styles/layout';
import { parkingSelectList, dropDownSelectList, dropDownSelectList2 } from '../styles/selectList';
import { parkingButton, parkingButtonText } from '../styles/buttons';
import { parkingSpotText } from '../styles/text';
import Parking from '../components/Parking';
import Swiper from 'react-native-swiper'


const ParkingSpot = ({ navigation }) => {

    const [level, setLevel] = useState('');
    const [zone, setZone] = useState('');
    const [shop, setShop] = useState('');

    const shopData = [
        { key: 'Nike', value: 'Nike' },
        { key: 'Adidas', value: 'Adidas' },
        { key: 'Carefour', value: 'Carefour' },
        { key: 'Auchan', value: 'Auchan' },
    ]
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
                            <Text>Shops:</Text>
                            <SelectList
                                setSelected={(val) => setShop(val)}
                                data={shopData}
                                save='value'
                                placeholder='- -'
                                searchPlaceholder=''
                                maxHeight={150}
                                boxStyles={parkingSelectList}
                                dropdownStyles={dropDownSelectList2}
                            />
                        </View>
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
                                dropdownStyles={dropDownSelectList}
                            />
                        </View>
                        <View style={{ zIndex: 0 }}>
                            <Text>Zone:</Text>
                            <SelectList
                                setSelected={(val) => setZone(val)}
                                data={zoneData}
                                save='value'
                                placeholder='- -'
                                searchPlaceholder=''
                                maxHeight={150}
                                boxStyles={parkingSelectList}
                                dropdownStyles={dropDownSelectList}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={parkingButton}>
                        <Text style={parkingButtonText}>Find parking spot</Text>
                    </TouchableOpacity>
                </View>
                {/* <ScrollView horizontal={true} style={parkingSpotContainer}> */}

                <View style={parkingSpotContainer} horizontal={true}>
                    <Parking></Parking>
                </View>
                {/* </ScrollView> */}
            </View>
            <View style={barContainer} />
        </SafeAreaView >
    );
}

export default ParkingSpot
