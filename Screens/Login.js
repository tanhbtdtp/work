import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput, TouchableOpacity,StyleSheet, Text, View,Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import API from "../Services/ThuVien";

const Header = () => {
  return (
    <View style={styles.hd}>
      <Text style={styles.hd_text}>Đăng nhập</Text>
    </View>
  );
};



const Body = () => {
  const navigation = useNavigation();
  const [username,setUsername] =useState("");
  const [password,setPassword] =useState("");
  const [token,setToken] =useState("");
  const [isLoading,setIsLoading] =useState(false);

  const urlLogin =API.API_Login + `?taikhoan=${username}&matkhau=${password}&token=${token}`

  const onChangeUsername = value =>{    
      setUsername(value);
      //console.log(username)
  }
  const onChangePassword = value =>{
      setPassword(value);
      //console.log(password)
  }


  const onClickLogin = async () =>{
     if (username=="" || password=="" || username==null || password==null )      
        Alert.alert("Vui lòng nhập thông tin đăng nhập.");
      else {           

        try {
          setIsLoading(true);        
          const res = await axios.get(urlLogin);                      
          //console.log(res.data)

            if(res.data[0].tinhtrang==0)  {
              Alert.alert("Sai thông tin đăng nhập.");
            }
            else{
            // đăng nhập thành công
            AsyncStorage.setItem('manvID',res.data[0].manv);
            AsyncStorage.setItem('tennvID',res.data[0].hoten);            
            AsyncStorage.setItem('sdtnvID',res.data[0].sdt);            
            AsyncStorage.setItem('imagenvID',res.data[0].image);            
            AsyncStorage.setItem('tokenID',res.data[0].token);
            //chuyển màn hình sang HoneStack
            navigation.replace("HomeStack")             
            }            

        } catch (error) {
          // Handle errors
          //console.log(error);
        }finally {
          setIsLoading(false);
        }
      }
  } 

  return (
    <View style={styles.bd}>      
      <View style={{ paddingHorizontal: 15 }}>
       <View>
        <FontAwesome name="user" size={25} color={'gray'} style={{position:'absolute',top:60}}  />
        <Text style={styles.bd_tendangnhap}>Tên đăng nhập</Text>
        <TextInput
          style={{ backgroundColor: "#fff1", height: 60,fontSize:17,paddingHorizontal:30,marginTop:10,borderRadius:10}}
          placeholder="tên đăng nhập"          
          value={username}
          onChangeText={onChangeUsername}
          />
        </View>

        <View style={{borderWidth:0.5,borderColor:"gray"}} ></View>

        <View>
        <FontAwesome name="lock" size={25} color={'gray'} style={{position:'absolute',top:60}}  />
        <Text style={styles.bd_matkhau}>Mật khẩu</Text>        
        <TextInput
          style={{ backgroundColor: "#fff1", height: 60, fontSize: 17,paddingHorizontal:30,marginTop:10,borderRadius:10}}
          placeholder="mật khẩu"
          value={password}
          onChangeText={onChangePassword}
          secureTextEntry={true}
          />
        </View>

        <View style={{borderWidth:0.5,borderColor:"gray"}}></View>

        <View>
        <TouchableOpacity>
             <Text style={{fontWeight:500,color:'#2196F3',marginTop:10}} >Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity        
           onPress={onClickLogin}>
          <View style={{backgroundColor:'#2196F3', height:60,marginTop:40,justifyContent:"center",borderRadius:10,opacity:0.9}}>
            <Text style={{ color: "white",textAlign:"center",fontSize:18}}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>


      </View> 
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.ft}>      
      <View style={{flexDirection:"row", alignItems:"center",justifyContent:"center"}} >
      <Image
        style={styles.logo}
        source={{
          uri: 'https://capquangvnpt.net/wp-content/uploads/2020/12/vnpt-pay-icon.png',
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: "https://play-lh.googleusercontent.com/z9RBLt67PfZBhzfPdwKw1dl_wawTkRpyfx5kn8pMMVAk7zsS_SQQlyRGR9YnjGVjDBRU",
        }}
      />
          <Image
        style={styles.logo}
        source={{
          uri: 'https://vinaphonetphcm.com/files/tin/731/png/5g-vinaphone.png',
        }}
      />
      </View>
    </View>
  );
};

export default function Login() {  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Body/>
      <Footer />     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",    
    //alignItems: "center",
    //justifyContent: "center",         
    paddingHorizontal:10
  },

  hd: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  hd_text: {
    fontSize: 30,
    fontWeight: 700,
    marginTop:50
  },

  bd: {
    flex: 3,
    
  },    

  bd_tendangnhap: {
    fontSize: 18,
    fontWeight: 600,
    marginTop:10,    
  },

  bd_matkhau: {
    fontSize: 18,
    fontWeight: 600,        
    marginTop:10
  },
  
  ft: {
    flex: 1,
    backgroundColor: "white",
  },

  logo :{
    height:48,
    width:48,
    marginLeft:20    
  }

});
