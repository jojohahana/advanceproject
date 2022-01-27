import React, { useDebugValue, useEffect, useState } from 'react';
import { Text, View, Button, Alert, TextInput } from 'react-native';

export default function FetchDetail({ route, navigation }) { 
    const { id } = route.params;

    const [nama, setNama] = useState(route.params.nama)
    const [umur, setUmur] = useState(route.params.umur)

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

            <View style={{marginTop : 50 }}/>

            <TextInput
            value={nama}
            onChangeText={(nama) => setNama(nama)}
            style={{ borderBottomwidth: 1, borderBottomColor:'gray' }}/>

            <TextInput
            value={umur}
            onChangeText={(umur) => setUmur(umur)}
            style={{ borderBottomwidth: 1, borderBottomColor:'gray' }}/>        

            <Button
            title='Delete'
            onPress={deleteData}/>

            <Button
            title='Update'
            onPress={deleteData}/>

        </View>
    )
}