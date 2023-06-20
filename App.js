import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Screens/Login';
import HomeStack from './Screens/HomeStack';


// git push -f origin main
// npx yarn add expo

// thư viện
// npx expo install expo-print
// npx expo install expo-sharing
// npx yarn add axios

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  </NavigationContainer>      
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
