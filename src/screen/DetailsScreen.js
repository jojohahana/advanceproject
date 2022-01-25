import * as React from 'react';
import { Button, View, Text } from 'react-native';

export default function DetailsScreen({route, navigation}) {
    const { itemId, otherParam } = route.params;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {(itemId)}</Text>
      <Text>otherParam: {(otherParam)}</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')} //() => arrow function
          />
      </View>
    );
  }