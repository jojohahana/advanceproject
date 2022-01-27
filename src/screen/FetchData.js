import React, { useEffect, useState } from 'react'; //Import useEffecr dan useState
import { ActivityIndicator, FlatList, Text, View, StyleSheet } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import stylesx from '../component/MyStyles';

export default FetchData = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //LIFE CYCLE ASYNCHRONOUS
  //Constructur
  const getMovies = async () => {
     try {
      const response = await fetch('http://192.168.43.36/API-RN/jsondata.php');
      const json = await response.json();
      setData(json.user);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  
  //useEffect(() => {
  //  getMovies();
  //}, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log("Screen Focused")
      getMovies();
    });
    return unsubscribe;
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Pressable onPress={
                () => navigation.navigate('FetchDetail', {
                    id : item.id,
                    nama: item.nama, //Ambil item dari renderItem
                    umur: item.umur
                })
            }>
            <View style={stylesx.listRender}>
                <Text style={stylesx.textRender}>
                    {item.nama}
                </Text>
            </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};
