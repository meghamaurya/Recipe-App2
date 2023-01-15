import React from 'react';
import PageOne from './Components/Page1/PageOne';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page2 from './Components/Page2/Page2'
const Stack = createNativeStackNavigator();



export default function App() {
  
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