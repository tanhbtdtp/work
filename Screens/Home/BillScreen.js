import { React,useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,TextInput,FlatList,Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';



export default BillScreens = () => {
    const [selectedPrinter, setSelectedPrinter] = useState();
    const navigation = useNavigation();


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
  
    const printToFile = async () => {
      // On iOS/android prints the given html. On web prints the HTML from the current page.
      const { uri } = await Print.printToFileAsync({ html });
      console.log('File has been saved to:', uri);
      await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    };
  
    const selectPrinter = async () => {
      const printer = await Print.selectPrinterAsync(); // iOS only
      setSelectedPrinter(printer);
    };     
    
    const items = [
      { 
         id: '0000521', 
         hoten: 'Huỳnh Bùi Thanh Tân',
         diachi: '54A Lý Thường Kiệt, phường 1 TP.Cao lãnh Đồng Tháp',
         tongtien: '322000'         
      },      
      { 
        id: '0000522', 
        hoten: 'Nguyễn Văn Tiến',
        diachi: '54A Lý Thường Kiệt, phường 1 TP.Cao lãnh Đồng Tháp',
        tongtien: '150000' 
     },            
    ]
// item cho danh sách
const Items = ({data}) =>{
return(
<TouchableOpacity>
      <View
          style={{
            flex:1,
            backgroundColor: '#eeee',
            borderRadius: 10,
            padding: 20,
            marginVertical: 5,
            marginHorizontal: 10,
          }}>
          <View style={{flexDirection:'row'}} >
             <Text style={{fontSize: 13}}>MTT</Text>
             <Text style={{fontSize: 13,marginLeft:5,fontWeight:700,color:'#2196F3'}}>{data.id}</Text>          
          </View>
          <Text style={{fontSize: 15,fontWeight:600}}>{data.hoten}</Text>
          <Text style={{fontSize: 13}}>{data.diachi}</Text>

          <View style={{flexDirection:'row',alignItems:"center"}} >
             <Text style={{fontSize: 13,color:'gray'}}>Tổng tiền</Text>
             <Text style={{fontSize: 13,color:'#EB984E',marginLeft:13,fontWeight:700}}>{data.tongtien}</Text>          
          </View>
        </View>
  </TouchableOpacity>
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
                data={items}
                renderItem={({ item }) => <Items data={item}/>}              
                keyExtractor={(item) => item.id}
         />
        </View>

      <View>
      <Text>Man hinh BILL</Text>
      <TouchableOpacity
        style={{ backgroundColor: "blue" }}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={{ color: "white" }}>Go to Login</Text>
      </TouchableOpacity>
      </View>

      <Button title="Print" onPress={print} />
      <View style={styles.spacer} />
      <Button title="Print to PDF file" onPress={printToFile} />
      {Platform.OS === 'ios' && (
        <>
          <View style={styles.spacer} />
          <Button title="Select printer" onPress={selectPrinter} />
          <View style={styles.spacer} />
          {selectedPrinter ? (
            <Text style={styles.printer}>{`Selected printer: ${selectedPrinter.name}`}</Text>
          ) : undefined}
        </>
      )}


    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      //alignItems: "center",
      //justifyContent: "center",
      //backgroundColor:'gray'
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




