import { View, Text } from 'react-native'
import React from 'react'

const NestedComponent = () => {
  return (
    <View style={{ backgroundColor: 'red', width: 200, height: 200 }}>
      <Text style={{ fontSize: 40, color: 'white' }}>Nested Component</Text>
      
    </View>
  )
}

export default NestedComponent;