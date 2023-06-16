import { React,useState,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,TextInput,FlatList,Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import API from "../../Services/ThuVien";



export default BillScreens = () => {        
  const [ListData,setListData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
    
  useEffect(() => {
    const fetchData = async () => {      
      try {
        setIsLoading(true);        
        const list = await axios.get(API.List_ThuCuoc);    
        setListData(list.data);                        
      } catch (error) {
        // Handle errors
        console.log(error);
      }finally {
        setIsLoading(false);
      }      
  }
  // call the function
   fetchData();    
  },[])
  


    
// item cho danh sách
const Items = ({data}) =>{


// cac ham xu ly in
const [selectedPrinter, setSelectedPrinter] = useState();
    const html = `
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
            </head>
            <body style="text-align:center;">
              <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
                Hello Expo!
              </h1>
              <img
                src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
                style="width: 90vw;" />
            </body>
          </html>
          `;

// in ấn
const print = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      await Print.printAsync({
        html,
        printerUrl: selectedPrinter?.url, // iOS only
      });
};    

return(
      <View
          style={{
            flex:1,
            backgroundColor: '#eeeeee',
            borderRadius: 10,
            padding: 10,
            marginVertical: 5,
            marginHorizontal: 5,
          }}>

          <View style={{flexDirection:'row'}} >
             <View style={{flex:1,flexDirection:'row'}} >
                <Text style={{fontSize: 13,color:'#566573'}}>Mã TT</Text>
                <Text style={{fontSize: 13,marginLeft:5,fontWeight:700,color:'#2196F3'}}>{data.id}</Text>          
             </View>
             <View>             
                  <Text style={{fontSize: 15,color:'#EB984E',marginLeft:50,fontWeight:500}}>{data.tongtien} đ</Text>          
             </View>
          </View>

          <Text style={{fontSize: 15,fontWeight:600}}>{data.hoten}</Text>
          <Text style={{fontSize: 12}}>{data.diachi}</Text>          

          <View style={{flexDirection:'row',alignItems:"center"}} >
             <Text style={{fontSize: 13,color:'#566573'}}>Tình trạng</Text>
             <Text style={{fontSize: 13,marginLeft:10,fontWeight:600}}>             
                  {data.tinhtrang? <Text style={{color:'#239B56'}}>Đã thanh toán</Text> :<Text style={{color:'#CD5C5C'}}>Chưa thanh toán</Text>}
                  </Text>          
          </View>

          <View style={{flexDirection:'row',alignItems:"center",justifyContent:'flex-end'}} >
            <TouchableOpacity>
                  <Ionicons name="eye-outline" size={30} style={{marginTop:5}} />             
            </TouchableOpacity>
            <TouchableOpacity onPress={print} >
                  <Ionicons name="print" size={30}  color={'#239B56'} style={{marginLeft:15,marginTop:5}} />
            </TouchableOpacity>
          </View>
        </View>    
  
  )}

// Phần body 
  return (
    <SafeAreaView style={styles.container}>      
        <View style={{ flex:1, flexDirection:"row", backgroundColor:'#2196F3',justifyContent:'center',alignItems:'center'}}>
                <TextInput style={{backgroundColor:'#ffff',width:'95%',height:50,fontSize:15,padding:10,
                        borderRadius:10}} placeholder="Tìm kiếm..."></TextInput>
                <TouchableOpacity style={{marginLeft:5,position:'absolute',right:30}}>
                     <Ionicons name='search' size={30} color={'#566573'} />
                </TouchableOpacity>
        </View>                
        <View style={{padding:10,marginLeft:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
              <Text style={{fontWeight:600}}>Khách hàng</Text>      
              <View style={{flexDirection:'row',paddingHorizontal:10}}>
                     <TouchableOpacity style={{backgroundColor:'#2196F3',borderRadius:5,width:80,alignItems:'center'}} >
                        <Text style={{fontWeight:400,color:'#ffff',padding:5}}>Đã thu</Text>      
                     </TouchableOpacity>
                     <TouchableOpacity style={{backgroundColor:'#2196F3',marginLeft:10,borderRadius:5,width:80,alignItems:'center'}}>
                        <Text style={{fontWeight:400,color:'#ffff',padding:5}}>Chưa thu</Text>      
                    </TouchableOpacity>
              </View>
        </View>
        <View style={{ flex:6,backgroundColor:'#fff',width:'95%',alignSelf:"center",marginTop:10}}>  
        <FlatList
                style={styles.list}
                data={ListData}
                renderItem={({ item }) => <Items data={item} print={print} />}              
                keyExtractor={(item) => item.id}
         />         
        </View>   
    </SafeAreaView>

  );
}

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




