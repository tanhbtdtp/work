import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput, TouchableOpacity,StyleSheet, Text, View,Image, Alert} from "react-native";
import Checkbox from "expo-checkbox";
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
  const [isChecked, setChecked] = useState(false);

  const urlLogin =API.API_Login + `?taikhoan=${username}&matkhau=${password}&token=${token}`

  const onChangeUsername = value =>{    
      setUsername(value);
  }

  const onChangePassword = value =>{
      setPassword(value);  
  }

  const onClickLogin = async () =>{
     if (username=="" || password=="" || username==null || password==null )      
        Alert.alert("Vui lòng nhập thông tin đăng nhập.");
      else {           

        try {
          setIsLoading(true);        
          const res = await axios.get(urlLogin);                      

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

            //Chuyển màn hình sang HoneStack
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

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>  
                 <View style={{flexDirection:'row',marginTop:10}}>
                 <Checkbox                
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? '#2196F3' : undefined}
                />
                <Text style={{fontSize:14,marginLeft:5,fontWeight:500,color:'#2196F3',opacity:0.7}}>Ghi nhớ</Text>
                </View> 
                <TouchableOpacity>
                    <Text style={{fontWeight:500,color:'#2196F3',marginTop:10,opacity:0.7}}>Quên mật khẩu?</Text>
                </TouchableOpacity>
            </View>

            <View>            
                <TouchableOpacity        
                  onPress={onClickLogin}>
                  <View style={{backgroundColor:'#2196F3', height:60,marginTop:40,justifyContent:"center",borderRadius:10,opacity:0.8}}>
                    <Text style={{ color: "white",textAlign:"center",fontSize:18}}>Đăng nhập</Text>
                  </View>
                </TouchableOpacity>                
            </View>
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
          uri: API.Logo_1
        }}
      />
      <Image
        style={styles.logo}
        source={{
          uri: API.Logo_2
        }}
      />
        <Image
        style={styles.logo}
        source={{
          uri: API.Logo_3
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
