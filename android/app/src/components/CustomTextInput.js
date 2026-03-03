import { Text, TouchableOpacity, View, TextInput } from 'react-native';

const CustomTextInput = ({ label, value, textStyle, onChangeText, secureTextEntry, placeholder}) => {
    return (
        <View style={{width:'100%', alignItems: 'center', padding: '10'}}>
                <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={{
                width: '80%',
                backgroundColor: '#cccccc',
                borderRadius: 10
                }}
                />
        </View>
    );
};
export default CustomTextInput;