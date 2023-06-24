import React, { useEffect,useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

import Ionicons from "react-native-vector-icons/Ionicons";

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
<View style={{flex:1.5,backgroundColor:'#2196F3',justifyContent:'center'}}>
    <View style={{justifyContent:'space-between',alignItems:'center', flexDirection:'row',paddingHorizontal:15,marginTop:20}}>
         <View>
            <Text style={{fontSize:20,color:'#fff'}} >VNPT ĐỒNG THÁP</Text>
            <Text style={{fontSize:15,color:'#fff',opacity:0.8}} >Vinaphone</Text>
        </View>
        <View>
            <Image
              style={{height:60,width:60,borderRadius:80,borderWidth:1.5,borderColor:'#fff'}}
              source={{
              uri: avatar,
            }}/>
        </View>
    </View>

    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <View style={{width:'100%',alignItems:'center'}}>
                      <TextInput placeholder="Tìm kiếm" style={{width:"90%",height:50,backgroundColor:'#fff',borderRadius:10,paddingHorizontal:50,opacity:0.9} } />
                      <Ionicons name="search" size={30} style={{position:'absolute',top:10,left:30,color:'gray'}} />
          </View>
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
      <View style={{flex:4,backgroundColor:'#F8FAFC',paddingHorizontal:5}}>          
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
               <View style={{height:80,borderWidth:0.7,borderColor:'gray',marginTop:8,opacity:0.6}} />
              <View style={styles.info}>              
                  <Text style={styles.txtinfo}>20.5</Text>  
                  <Text style={styles.txtinfotext}>MyTV</Text>                  
              </View>
              <View style={{height:80,borderWidth:0.7,borderColor:'gray',marginTop:8,opacity:0.6}} />
              <View style={styles.info}>              
                <Text style={styles.txtinfo}>115</Text>
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
    backgroundColor: "#F8FAFC",        
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
    borderRadius:10,
    backgroundColor:'#ffff',
    borderWidth:1,
    borderColor:'#F1F3F9'    
  },

  info :{
    flex:1,
    justifyContent:"center",
    alignItems:'center',            
    borderColor:'#BDC3C7'
  },

  txtinfo :{

    fontSize:25,
    fontWeight: 700,
    marginBottom :5,
    opacity:0.7

  },
  txtinfotext :{
    fontWeight:400,
    color:'gray'
  },
  
});

