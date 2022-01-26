import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Button} from 'react-native';

export default function FetchPost() {
    //State 
    const [nama, setNama] = useState("");
    const [umur, setUmur] = useState("");

    const submitData = () => {
        //alert("Data " + nama + umur + "telah disubmit !")

        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nama: nama,
                umur: umur
        })
    })

        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        })
        .catch((error) => {
        console.error(error);
        });
    }
    
    return (
        <View style={{ padding: 10 }}>

            <Text style={{ fontSize: 20 }}>Input Data</Text>

            <TextInput
                style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}
                placeholder="Type your name"
                onChangeText={nama => setNama(nama)}
            />

            <TextInput
                style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}
                placeholder="Type your name"
                onChangeText={umur => setUmur(umur)}
            />

            <Button
            title='Submit'
            onPress={submitData}/>
        </View>
    )
}