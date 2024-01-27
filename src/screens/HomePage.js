import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';

// styles
import { appContainer, homeArea } from '../styles/layout';
import { AppContext } from '../context/AppContext';
import { dropDownSelectList, homeSelectList } from '../styles/selectList';
import AppLogo from '../components/AppLogo';


const HomePage = ({ navigation }) => {

    const { parkingNames, chooseParking } = useContext(AppContext);
    const [selected, setSelected] = useState("");
    return (
        <SafeAreaView style={appContainer}>
            <AppLogo />
            <View style={homeArea}>
                <Text style={{ top: '27%', position: 'absolute' }}>Welcome to Car Park</Text>
                <FontAwesome5 name="car" size={100} color='#393e46' style={{ top: '15%', position: 'absolute' }} />
                <SelectList style={dropDownSelectList} setSelected={setSelected} data={parkingNames} boxStyles={homeSelectList} onSelect={() => { chooseParking(selected) }} placeholder='- -'
                    searchPlaceholder='' />
            </View>
        </SafeAreaView>
    );
}

export default HomePage
