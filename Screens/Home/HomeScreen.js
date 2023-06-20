import React, { useEffect,useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default HomeScreen = () => {
    const [username,setUsername] =useState("");    
    const navigation = useNavigation();

    useEffect(()=>{        
        AsyncStorage.getItem('UserID').then(value=>{
        setUsername(value);    
        })
    },[]);

  return (
    <View style={{fontSize:30}}>
      <Text style={{fontSize:30}} >Màn hình Home</Text>
      <TouchableOpacity
        style={{ backgroundColor: "blue" }}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={{color: "white",fontSize:30}}>Go to Login</Text>

      </TouchableOpacity>
    </View>
  );
};
