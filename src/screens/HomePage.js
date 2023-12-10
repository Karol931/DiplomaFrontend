import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
// styles
import { homeArea } from '../styles/layout';
import { AppContext } from '../context/AppContext';
import { dropDownSelectList, dropDownSelectList2 } from '../styles/selectList';


const HomePage = ({ navigation }) => {

    const { parkingNames, chooseParking } = useContext(AppContext);
    const [selected, setSelected] = useState("");
    return (
        <SafeAreaView style={homeArea}>
            <Text>Welcome to Car Park</Text>
            <FontAwesome5 name="car" size={100} color='#393e46' style={{ marginBottom: 20 }} />
            <SelectList style={dropDownSelectList} setSelected={setSelected} data={parkingNames} onSelect={() => { chooseParking(selected) }} />
        </SafeAreaView>
    );
}

export default HomePage
