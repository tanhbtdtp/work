import React  from "react";
import { View,Text, ActivityIndicator} from "react-native";


export default Loading = () =>{

return(      
          <View style={{flex:1,backgroundColor:'gray',justifyContent:'center',alignItems:'center',position:'absolute',width:'100%',height:'100%',opacity:0.5}}>
            <ActivityIndicator size={"large"} color={'#ffff'}  />
            <Text>Đang tải..</Text>
          </View>              
)};