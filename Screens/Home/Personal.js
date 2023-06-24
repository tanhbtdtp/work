import React, { useEffect ,useState} from "react";
import { View,Text, StyleSheet,Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default Personal = () =>{
const [manv,setManv] =useState();    
const [hoten,setHoten] =useState();    
const [avatar,setAvatar] =useState();    
const navigation = useNavigation();


const item = {
          id: manv,
          tennv: hoten,
          loainv: 'Nhân viên kinh doanh',
          donvi: 'PBH TP Cao Lãnh',
          avatar : avatar
 }

useEffect(()=>{
        // Lấy thông tin người dùng
        AsyncStorage.getItem("manvID").then(value=>{
            setManv(value);
        });
        AsyncStorage.getItem("tennvID").then(value=>{
            setHoten(value);
        });
        AsyncStorage.getItem("imagenvID").then(value=>{
            setAvatar(value);
        });
},[])


return(
    <SafeAreaView style={styles.container}>   
      <StatusBar backgroundColor="#2196F3"/>   
      <View style={styles.header}>
           <Text style={{color:'#F4F6F7',fontSize:20,marginTop:20}} >VNPT ĐỒNG THÁP</Text>         
      </View>
      <View style={styles.footer}></View>
         <View style={styles.panel}>
      <Image
        style={styles.logo}
        source={{
          uri: item.avatar,
        }}
      />          
      <View style={{flexDirection:'row',justifyContent:'space-between'}} >
            <View>
            <Text style={{fontSize:15,marginLeft:15,marginTop:15,fontWeight:500}}>{item.tennv}</Text>         
            <Text style={{fontSize:13,marginLeft:15,marginTop:5}}>{item.id}</Text>         
            <Text style={{fontSize:13,marginLeft:15,marginTop:5,color:'#566573'}}>{item.loainv}</Text>         
            </View>
            
                <View style={{justifyContent:"center", marginRight:20}}>
                <TouchableOpacity onPress={() => navigation.replace("Login")}>                    
                    <Ionicons name="exit" size={50} color={'#2196F3'} style={{opacity:0.8}} /> 
                </TouchableOpacity>
                <Text style={{fontSize:13,fontWeight:400}}>Thoát</Text>
                </View>
            
      </View>
       <View style={{backgroundColor:'gray',width:'100%',height:0.4,alignSelf:"center",marginTop:18}}></View> 
       <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:"center"}} >
                    <Ionicons name="call" size={20} color={'gray'}/>
                    <Text style={{marginLeft:5}}>Điện thoại</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:"center"}} >
                    <Ionicons name="mail" size={20} color={'gray'} />
                    <Text style={{marginLeft:5}}>Email</Text>
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:"center"}} >
                    <Ionicons name="logo-facebook" size={20} color={'gray'}/>
                    <Text style={{marginLeft:5}}>facebook</Text>
                </View>
        </View>
      </View>      
    </SafeAreaView>    
)}


const styles = StyleSheet.create({
container : {
    flex :1,    
},
header :{
    flex:1,
    backgroundColor: '#2196F3',       
    alignItems:"center"    
},
logo:{
    height: 80,
    width :80,
    borderRadius:20,
    marginTop:-40,
    alignSelf:"center"
},
footer :{
    flex:3
},
panel :{
    width:'95%',
    height :190,
    backgroundColor:'#FBFCFC',   
    position:'absolute',    
    top: 150,
    left :11,    
    borderRadius: 20,
    borderWidth:0.5,
    borderColor:'#D5D8DC'
}

})


