import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PageOne from './Components/Page1/PageOne';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page2 from './Components/Page2/Page2'
import { REACT_APP_API_KEY } from "@env"
const Stack = createNativeStackNavigator();



export default function App() {
  useEffect(() => {
    console.log(REACT_APP_API_KEY)
  }, [])
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={PageOne} />
        <Stack.Screen name="Detail" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
