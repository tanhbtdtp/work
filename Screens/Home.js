import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
   const navigation = useNavigation(); 
   return(
    <View>
      
          <Text>Man hinh Home</Text>
          <TouchableOpacity style={{backgroundColor:'blue'}}
           onPress={()=> navigation.replace('Login')}
      >
          <Text style={{color:'white'}} >Go to Login</Text>
      </TouchableOpacity>

    </View>
   ) 
}  


const DetailScreen = () => {
  const navigation = useNavigation(); 
  return(
   <View>
         <Text>Man hinh Detail</Text>
         <TouchableOpacity style={{backgroundColor:'blue'}}
          onPress={()=> navigation.replace('Login')}
     >
         <Text style={{color:'white'}} >Go to Login</Text>
     </TouchableOpacity>

   </View>
  ) 
}  

const InfoScreen = () => {
  const navigation = useNavigation(); 
  return(
   <View>
         <Text>Man hinh Info</Text>
         <TouchableOpacity style={{backgroundColor:'blue'}}
          onPress={()=> navigation.replace('Login')}
     >
         <Text style={{color:'white'}} >Go to Login</Text>
     </TouchableOpacity>

   </View>
  ) 
}  


const Tab = createBottomTabNavigator();
export default function Home() { 
  return (         
     <Tab.Navigator 
     screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomeScreen') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'DetailScreen') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        } else if (route.name === 'InfoScreen') {
        iconName = focused ? 'information-circle' : 'information-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown:false
    })}>

      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="DetailScreen" component={DetailScreen} />
      <Tab.Screen name="InfoScreen" component={InfoScreen} />
    </Tab.Navigator>
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