import * as React from 'react';
import { Button, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StorageScreen() {
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('nama', 'Putra')
        } catch (e) {
          // saving error
        }
      }

      const getData = async (value) => {
        try {
          const value = await AsyncStorage.getItem('nama')
          console.log("Data : " + value)
        } catch (e) {
          // saving error
        }
      }

      const deleteData = async (value) => {
        try {
          const value = await AsyncStorage.setItem('nama', '')
          console.log("Data telah didelete !")
        } catch (e) {
          // saving error
        }
      }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Storage Screen</Text>

            <Button title='Store Date' onPress={storeData}/>
            <Button title='Get Data' onPress={getData}/>
            <Button title='Delete Data' onPress={deleteData}/>
        </View>
    );
}