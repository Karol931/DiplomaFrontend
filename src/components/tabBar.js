import { FontAwesome5 } from "@expo/vector-icons";

const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
        case 'Home':
            iconName = 'home';
            break;
        case 'Payment':
            iconName = 'credit-card';
            break;
        case 'Settings':
            iconName = 'cog';
            break;
        case 'Parking':
            iconName = 'parking';
            break;
        default:
            iconName = ''
            break;
    }

    return <FontAwesome5 name={iconName} size={20} color={color} />

};

export default screenOptions;