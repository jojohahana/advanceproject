import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';

export default function FetchDetail({ route }) {
    const { title, year } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Detail Movie</Text>
            <Text>Title : {title}</Text>
            <Text>Year Release : {year}</Text>
        </View>
    )
}