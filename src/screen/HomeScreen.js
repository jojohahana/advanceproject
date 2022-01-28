import React, {useEffect} from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export default function HomeScreen({ navigation }) {

  useEffect( () => {
    //get token
    messaging()
      .getToken()
      .then( token => {
        console.log(token)
      })
  }, []);
  
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

        <Button
        title="Fetch Data"
        onPress={() => navigation.navigate('FetchData')}
        />

        <Button
        title="Fetch Post"
        onPress={() => navigation.navigate('FetchPost')}
        />

      </View>
    );
  }