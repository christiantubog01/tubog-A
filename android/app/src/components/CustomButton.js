import { TouchableOpacity, Text, View } from 'react-native';

const CustomButton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 10,
            alignItems: 'center',
          },
          style, 
        ]}
      >
        <Text
          style={[
            { color: 'white', fontSize: 18 },
            textStyle, // 👈 custom text styles
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;