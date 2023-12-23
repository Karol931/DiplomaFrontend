import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
// styles
import { homeArea } from '../styles/layout';
import { AppContext } from '../context/AppContext';
import { dropDownSelectList, parkingSelectList } from '../styles/selectList';


const HomePage = ({ navigation }) => {

    const { parkingNames, chooseParking } = useContext(AppContext);
    const [selected, setSelected] = useState("");
    return (
        <SafeAreaView style={homeArea}>
            <Text style={{ top: '32%', position: 'absolute' }}>Welcome to Car Park</Text>
            <FontAwesome5 name="car" size={100} color='#393e46' style={{ top: '20%', position: 'absolute' }} />
            <SelectList style={dropDownSelectList} setSelected={setSelected} data={parkingNames} boxStyles={parkingSelectList} onSelect={() => { chooseParking(selected) }} placeholder='- -'
                searchPlaceholder='' />
        </SafeAreaView>
    );
}

export default HomePage
