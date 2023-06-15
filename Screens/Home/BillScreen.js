import { React,useState,useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,TextInput,FlatList,Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import Icon from "react-native-vector-icons/Ionicons";


export default BillScreens = () => {        
    const [ListData,setListData] = useState([]);
    
    useEffect(() => {      
      getItems();
    },[]);

    // lay danh sach
    const getItems = () => {
      axios
          .get("https://api.mockfly.dev/mocks/c171e632-6050-4a92-8c67-e25fe2c004fd/list")
          .then((response) => {
              setListData(response.data);
          });
          console.log(ListData);
    };    

    
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
            padding: 20,
            marginVertical: 5,
            marginHorizontal: 5,
          }}>

          <View style={{flexDirection:'row'}} >
             <Text style={{fontSize: 13}}>MTT</Text>
             <Text style={{fontSize: 13,marginLeft:5,fontWeight:700,color:'#2196F3'}}>{data.id}</Text>          
          </View>
          <Text style={{fontSize: 15,fontWeight:600}}>{data.hoten}</Text>
          <Text style={{fontSize: 12}}>{data.diachi}</Text>

          <View style={{flexDirection:'row',alignItems:"center"}} >
             <Text style={{fontSize: 13,color:'#566573'}}>Tổng tiền</Text>
             <Text style={{fontSize: 13,color:'#EB984E',marginLeft:13,fontWeight:700}}>{data.tongtien}</Text>          
          </View>

          <View style={{flexDirection:'row',alignItems:"center"}} >
             <Text style={{fontSize: 13,color:'#566573'}}>Tình trạng</Text>
             <Text style={{fontSize: 13,color:'#EB984E',marginLeft:10,fontWeight:700}}>
                  {data.tinhtrang? <Text style={{color:'#239B56'}}>Đã thanh toán</Text> :<Text style={{color:'#EB984E'}}>Chưa thanh toán</Text>}
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


  return (
    <SafeAreaView style={styles.container}>      
        <View style={{ flex:1, flexDirection:"row", backgroundColor:'#2196F3',justifyContent:'center',alignItems:'center'}}>

                <TextInput style={{backgroundColor:'#ffff',width:'85%',height:50,fontSize:15,padding:10,
                        borderRadius:10}} placeholder="Tìm kiếm..."></TextInput>
                <TouchableOpacity style={{marginLeft:5}}>
                     <Ionicons name='search' size={30} color={'white'} />
                </TouchableOpacity>
        </View>                
        <View style={{ flex:6,backgroundColor:'#fff',width:'95%',alignSelf:"center",marginTop:10}}>  

        <FlatList
                style={styles.list}
                data={ListData}
                renderItem={({ item }) => <Items data={item} print={print} />}              
                keyExtractor={(item) => item.id}
         />
        </View>        
      <View>        

      <Text>Man hinh BILL</Text>      
      </View>

      <Button title="Print" onPress={getItems} />     

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




