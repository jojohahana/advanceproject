import React, {useState} from "react";
import {View, Text, TextInput, Button} from "react-native";

export default function InputState(){

    const [nama, setNama] = useState("");
    const [umur, setUmur] = useState("");

    return(
        <View style={{padding: 10}}>
            <Text>Input State</Text>

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

            <Text>
                {nama} {umur}
            </Text>
        </View>
    )
}