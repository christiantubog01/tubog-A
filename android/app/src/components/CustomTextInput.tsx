import React from 'react';
import { View, TextInput, Text, TextStyle } from 'react-native';

// 🔹 Define props type
interface CustomTextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  placeholder?: string;
  textStyle?: TextStyle;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  placeholder,
  textStyle,
}) => {
  return (
    <View style={{ width: '100%', alignItems: 'center', padding: 10 }}>
      
      {label && <Text>{label}</Text>}

      <TextInput
        placeholder={placeholder}
        value={value} 
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={[
          {
            width: '80%',
            backgroundColor: '#cccccc',
            borderRadius: 10,
            padding: 10,
          },
          textStyle,
        ]}
      />
    </View>
  );
};

export default CustomTextInput;