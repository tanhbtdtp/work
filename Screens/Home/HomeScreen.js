import React, { useEffect,useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";


export default HomeScreen = () => {
    const [avatar,setAvatar] =useState();    
    const navigation = useNavigation();

    // lấy thông tin người dùng 
    useEffect(()=>{        
          AsyncStorage.getItem('imagenvID').then(value=>{
          setAvatar(value);              
        })
    },[]);    


const Header = () => {
  return(
    <View style={{flex:1,backgroundColor:'#2196F3',justifyContent:'space-between',alignItems:'center', flexDirection:'row',paddingHorizontal:15}}>
         <View>
            <Text style={{fontSize:25,color:'#fff'}} >VNPT ĐỒNG THÁP</Text>
            <Text style={{fontSize:15,color:'#fff',opacity:0.8}} >Vinaphone</Text>
        </View>
        <View>
            <Image
              style={{height:60,width:60,borderRadius:80,borderWidth:1.5,borderColor:'#fff'}}
              source={{
              uri: avatar,
            }}        
        />        
        </View>
    </View>
  )}

  const Body = () => {
    return(
      <View style={{flex:4,backgroundColor:'#fff',paddingHorizontal:5}}>          
           <View>
          <Image
              style={{borderRadius:5,height:200, borderWidth:1,borderColor:'#fff',marginTop:5}}
              source={{
                  uri: 'https://vnptdongthap.vn/tainguyen/images/ToaNha_TTKD.jpg',              
              }}
              resizeMode="contain"
            />
            </View>
            <View>
              <Text>Danh mục</Text>
            </View>
      </View>      
    )};
    

  return (
    <SafeAreaView style={styles.container}>
       <Header/>
       <Body/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",        
  },
  list :{
     flex: 1,           
  },

  row: {
    padding: 10,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },

});

