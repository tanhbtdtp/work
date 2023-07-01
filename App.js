import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from './Screens/Login';
import HomeStack from './Screens/HomeStack';
import { UserProvider } from './Context/UserContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (    
   
       
        <NavigationContainer>              
           <UserProvider>
        <Stack.Navigator screenOptions={{headerShown:false}} >       
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeStack" component={HomeStack} />          
        </Stack.Navigator>                
        </UserProvider>
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
