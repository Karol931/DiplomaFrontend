import React, { useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import { SelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';

// components
import { ParkingContext } from '../context/ParkingContext';

// styles
import { parkingArea, parkingOptionsArea } from '../styles/layout';
import { parkingButton, parkingButtonText } from '../styles/buttons';
import { parkingSelectList, dropDownSelectList } from '../styles/selectList';
import { AuthContext } from '../context/AuthContext';
//18 flex w kazdym

const SpotOptions = () => {

    const [level, setLevel] = useState(null);
    const [zone, setZone] = useState(null);
    const [shop, setShop] = useState(null);
    const [index, setIndex] = useState(0);
    const { findSpot, shops, levels, zones } = useContext(ParkingContext);

    const shopData = shops.map(shop =>
        ({ key: shop.name, value: shop.name })
    )

    const levelData = levels.map(level =>
        ({ key: level.number, value: level.number })
    )

    const zoneData = zones.map(zone =>
        ({ key: zone.name, value: zone.name })
    )

    return (
        <View style={parkingArea}>
            <Swiper loop={false} showsButtons={true} showsPagination={false} buttonWrapperStyle={{ paddingHorizontal: 5 }} onIndexChanged={(idx) => { setIndex(); setLevel(null); setShop(null); setZone(null); }}>
                <View style={parkingOptionsArea}>
                    <View>
                        <Text>Level:</Text>
                        <SelectList
                            selectedValue={level}
                            setSelected={(val) => setLevel(val)}
                            // onSelect={(val) => { setLevel(val) }}
                            data={levelData}
                            save='value'
                            placeholder='- -'
                            searchPlaceholder=''
                            maxHeight={120}
                            boxStyles={parkingSelectList}
                            dropdownStyles={dropDownSelectList}
                            defaultOption={key = 'placeholder'}
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
                            maxHeight={120}
                            boxStyles={parkingSelectList}
                            dropdownStyles={dropDownSelectList}
                        />
                    </View>
                </View>
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
                            dropdownStyles={dropDownSelectList}
                        />
                    </View>
                    <View style={{ zIndex: 0 }}>
                        <Text>Shop:</Text>
                        <SelectList
                            setSelected={(val) => setShop(val)}
                            data={shopData}
                            save='value'
                            placeholder='- -'
                            searchPlaceholder=''
                            maxHeight={150}
                            boxStyles={parkingSelectList}
                            dropdownStyles={dropDownSelectList}
                        />
                    </View>
                </View>
            </Swiper>
            <TouchableOpacity style={parkingButton} onPress={() => { findSpot(index, shop, zone, level) }}>
                <Text style={parkingButtonText}>Find parking spot</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SpotOptions