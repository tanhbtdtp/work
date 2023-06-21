import React, { useEffect,useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

import API from "../../Services/ThuVien";
import ItemUserView from "../../Components/ItemUserView";

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

  const Userview = () =>{
    return(
          <View style={{flex:1,padding:5}} >
              <ItemUserView/>
          </View>
    )}

const Body = () => {

    return(
      <View style={{flex:4,backgroundColor:'#fff',paddingHorizontal:5}}>          
           <View>
          <Image
              style={{borderRadius:5,height:200, borderWidth:1,borderColor:'#fff',marginTop:5}}
              source={{
                  uri: API.Logo_TTKD,              
              }}
              resizeMode="contain"
            />
            </View>            
            <View style={styles.forminfo}>
              <View style={styles.info}>                  
                  <Text style={styles.txtinfo} >30.2</Text>
                  <Text style={styles.txtinfotext}>Fiber</Text>
              </View>
              <View style={styles.info}>              
                  <Text style={styles.txtinfo}>20.5</Text>
                  <Text style={styles.txtinfotext}>MyTV</Text>
                  
              </View>
              <View style={styles.info}>              
              <Text style={styles.txtinfo}>3.32</Text>
              <Text style={styles.txtinfotext}>Di động</Text>              
              </View>
            </View>
      </View>      
    )};    



  return (
    <SafeAreaView style={styles.container}>
       <Header/>
       <Userview/>
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

  forminfo :{
    flexDirection:'row',justifyContent:'space-between',
    marginTop:10,
    height:100,
    borderRadius:5,
    backgroundColor:'#E5E7E9'
  },

  info :{
    flex:1,
    justifyContent:"center",
    alignItems:'center',        
    borderLeftWidth :1,
    borderColor:'#BDC3C7'
  },

  txtinfo :{
    fontSize:30,
    fontWeight: 500,
    marginBottom :5
  },
  txtinfotext :{
    fontWeight:400,
    color:'gray'
  },
  
});

