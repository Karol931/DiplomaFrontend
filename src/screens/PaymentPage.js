import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// components 
import AppLogo from '../components/AppLogo';

// styles
import { appContainer, barContainer, paymentArea, paymentSpotArea } from '../styles/layout';
import { paymentContainer, parkingSpotArea } from '../styles/layout';
import { parkingSpotText } from '../styles/text';
import { parkingButton, parkingButtonText } from '../styles/buttons';
import { paymentTextInput } from '../styles/textInput';

const PaymentPage = ({ navigation }) => {

    const [level, setLevel] = useState(1);
    const [zone, setZone] = useState('C');
    const [amount, setAmount] = useState('');

    return (
        <SafeAreaView style={appContainer}>
            <AppLogo />
            <View style={paymentContainer}>
                <View style={paymentArea}>
                    <View style={paymentSpotArea}>
                        <View>
                            <Text style={parkingSpotText}>Level:</Text>
                            <Text style={parkingSpotText}>{level}</Text>
                        </View>
                        <View>
                            <Text style={parkingSpotText}>Spot:</Text>
                            <Text style={parkingSpotText}>{zone} 15</Text>
                        </View>
                    </View>
                    <TextInput style={paymentTextInput} keyboardType='numeric' value={amount} onChange={(val) => setAmount(val)}></TextInput>
                    <TouchableOpacity style={parkingButton}>
                        <Text style={parkingButtonText}>Pay</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 100, alignItems: 'center' }}>
                    <Text>Rules:</Text>
                    <Text>1 hour - 5zł</Text>
                    <Text>1 day - 20zł</Text>
                </View>
            </View>
            <View style={barContainer} />
        </SafeAreaView>
    );
}

export default PaymentPage
