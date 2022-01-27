import React, { useEffect, useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';

export default function FetchDetail({ route, navigation }) { 
    const { id, nama, umur } = route.params;

    const deleteData = () => {
        //alert("Data " + nama + umur + "telah disubmit !")

        fetch('http://192.168.43.36/API-RN/delete.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
        })
    })

        .then((response) => response.json())
        .then((responseJson) => {
                Alert.alert(
                    "Delete Data",
                    responseJson,
                    [
                        { text: "OK", onPress: () => navigation.goBack()}
                    ]
                );
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detail User</Text>
            <Text>Nama : {nama}</Text>
            <Text>Umur : {umur}</Text>

            <Button
            title='Delete'
            onPress={deleteData}/>

        </View>
    )
}