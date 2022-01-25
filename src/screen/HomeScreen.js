import * as React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        {/*<Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />*/}
        
        <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
        />

        <Button
        title="Input State"
        onPress={() => navigation.navigate('InputState')}
        />
      </View>
    );
  }