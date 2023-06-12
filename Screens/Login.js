import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput, TouchableOpacity,StyleSheet, Text, View,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Header = () => {
  return (
    <View style={styles.hd}>
      <Text style={styles.hd_text}>Đăng nhập</Text>
    </View>
  );
};


const Body = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bd}>      
      <View style={{ paddingHorizontal: 15 }}>

      <Text style={styles.bd_tendangnhap}>Tên đăng nhập</Text>
        <TextInput
          style={{ backgroundColor: "#fff1", height: 60,fontSize:17,paddingHorizontal:15,marginTop:10,borderRadius:10}}
          placeholder="tên đăng nhập"
        ></TextInput>
        <View style={{borderWidth:0.5,borderColor:"gray"}} ></View>
        <Text style={styles.bd_matkhau}>Mật khẩu</Text>        
        <TextInput
          style={{ backgroundColor: "#fff1", height: 60, fontSize: 17,paddingHorizontal:15,marginTop:10,borderRadius:10}}
          placeholder="mật khẩu"          
        ></TextInput>
        <View style={{borderWidth:0.5,borderColor:"gray"}} ></View>
        <TouchableOpacity        
        onPress={() => navigation.replace("Home")}>
          <View style={{backgroundColor:'#2196F3', height:60,marginTop:40,justifyContent:"center",borderRadius:10}}>
            <Text style={{ color: "white",textAlign:"center",fontSize:18}}>Đăng nhập</Text>
        </View>
      </TouchableOpacity>

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
