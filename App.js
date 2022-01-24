import { View, Text, ActivityIndicator, Button } from 'react-native'; 
import React from 'react';

export default function App() {
  return (
    <View>
      <View>
        <Text>Hello World</Text>
        <Text>Test text </Text>
      </View>
      <View>
        <ActivityIndicator size="small" color="blue"/>
        <Button title='Press' onPress={()=>alert('Hello')} />
      </View>
    </View>
  );
}
 