import { Text, TouchableOpacity, View } from 'react-native';

const CustomButton = ({containerStyle, textstyle, label, onPress}) => {
    return (
        <View style={containerStyle}>
            <TouchableOpacity>
                <View
                style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                }}
                >
            <Text style={textStyle}>{label}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
export default CustomButton;