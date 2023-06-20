import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";


import BillScreen from "./Home/BillScreen.js";
import Personal from "./Home/Personal.js";
import HomeScreen from "./Home/HomeScreen.js";

const Tab = createBottomTabNavigator();
export default function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({       
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "BillScreen") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "InfoScreen") {
            iconName = focused
              ? "information-circle"
              : "information-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",            
            headerShown: false,
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} 
               options={{tabBarLabel:"Trang chủ",
               title: "Trang chủ",
               headerShown: false}}
              />
      <Tab.Screen name="BillScreen" component={BillScreen} 
              options={{tabBarLabel:"Thu cước",
              title: "Thu cước",              
              headerShown: false}}              
             />      
      <Tab.Screen name="InfoScreen" component={Personal} 
              options={{tabBarLabel:"Cá nhân",
              title: "Cá nhân",
              headerShown: false}}
            />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
