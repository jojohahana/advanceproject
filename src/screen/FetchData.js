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
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  
  useEffect(() => {
    getMovies();
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
                    title: item.title, //Ambil item dari renderItem
                    year: item.releaseYear
                })
            }>
            <View style={stylesx.listRender}>
                <Text style={stylesx.textRender}>
                    {item.title}
                </Text>
            </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

//Internal Style 
//Jangan lupa import StyleSheet

