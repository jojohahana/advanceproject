import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; //core
import { createNativeStackNavigator } from '@react-navigation/native-stack'; //stack

//Screen
import HomeScreen from './src/screen/HomeScreen';
import ProfileScreen from './src/screen/ProfileScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import InputState from './src/screen/InputState';
import FetchData from './src/screen/FetchData';
import FetchDetail from './src/screen/FetchDetail';
import FetchPost from './src/screen/FetchPost';

const Stack = createNativeStackNavigator();

function App() {
  return ( //Setup Navigation - Parent
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"> 
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: "My Home"}}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="InputState" component={InputState}/>
        <Stack.Screen name="FetchData" component={FetchData}/>
        <Stack.Screen name="FetchDetail" component={FetchDetail}/>
        <Stack.Screen name="FetchPost" component={FetchPost}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
