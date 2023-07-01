import { React,useState,useEffect, useCallback ,useContext} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity,SafeAreaView,TextInput,ActivityIndicator } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";
import API from "../../Services/ThuVien";
import { FlashList } from "@shopify/flash-list";
import ItemHoaDon from "../../Components/ItemHoaDon";
import AsyncStorage from "@react-native-async-storage/async-storage";


import UserContext from "../../Context/UserContext";

export default BillScreens = () => {        
  const [ListData,setListData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);  
  const [currentPage,setCurrentPage] =useState(1);
  const [manv,setManv] =useState('');
    
  const {userinfo} = useContext(UserContext);
  
  // API
  const urlThuCuoc =API.List_ThuCuoc + "?ma_nv=" + `${userinfo.manv}` + "&sotrang=" + `${currentPage}` + "&somautin=";
  
  // lấy thông tin người dùng 
  useEffect(()=>{        
    AsyncStorage.getItem('manvID').then(value=>{
    setManv(value);              
  })
},[]);    

  // hàm xuất danh sách thu cước
  useEffect(() => {
    const fetchData = async () => {      
      try {
        setIsLoading(true);        
        const res = await axios.get(urlThuCuoc);            
        setListData([...ListData,...res.data]);                 
      } catch (error) {
        // Handle errors
        console.log(error);
      }finally {
        setIsLoading(false);
      }      
  }
  // call the function
   fetchData();    
  },[currentPage])

  // load thêm dữ liệu
const  loadMoreItems = () =>{
    setCurrentPage(currentPage+1);
    //console.log('page '+ currentPage);
    console.log(urlThuCuoc);
}

const renderLoad =()=>{    
    return(   
     <View style={{alignItems:"center",justifyContent:"center"}}>
        {isLoading ?<ActivityIndicator size={50} color={'red'} /> : null }        
    </View>
)};

// định dạng cố định item layout
const ITEM_HEIGHT = 200;
const getItemLayout = useCallback((data,index)=>({
      length :ITEM_HEIGHT,
      offset :  ITEM_HEIGHT*index,
      index
}),[])


////////// Phần body ///////////////////
  return (
    <SafeAreaView style={styles.container}>    
     <StatusBar backgroundColor="#2196F3"/>   
     
        <View style={{ flex:1, flexDirection:"row", backgroundColor:'#2196F3',justifyContent:'center',alignItems:'center',marginTop:20}}>
                <TextInput style={{backgroundColor:'#ffff',width:'90%',height:50,fontSize:15,paddingHorizontal:25,opacity:0.9,
                        borderRadius:10}} placeholder="Tìm kiếm..."></TextInput>
                <TouchableOpacity style={{marginLeft:5,position:'absolute',right:30}}>
                     <Ionicons name='search' size={30} color={'#566573'} />
                </TouchableOpacity>
        </View> 

        <View style={{padding:10,marginLeft:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
              <Text style={{fontWeight:600}}>Khách hàng</Text>      
              <View style={{flexDirection:'row',paddingHorizontal:10}}>
                      <TouchableOpacity style={{backgroundColor:'#2196F3',borderRadius:5,width:80,alignItems:'center'}} >
                        <Text style={{fontWeight:400,color:'#ffff',padding:5}}>Tất cả</Text>      
                     </TouchableOpacity>
                     <TouchableOpacity style={{backgroundColor:'#2196F3',marginLeft:10, borderRadius:5,width:80,alignItems:'center'}} >
                        <Text style={{fontWeight:400,color:'#ffff',padding:5}}>Đã thu</Text>      
                     </TouchableOpacity>
                     <TouchableOpacity style={{backgroundColor:'#2196F3',marginLeft:10,borderRadius:5,width:80,alignItems:'center'}}>
                        <Text style={{fontWeight:400,color:'#ffff',padding:5}}>Chưa thu</Text>      
                    </TouchableOpacity>
              </View>
        </View>
        <View style={{ flex:6,backgroundColor:'#fff',width:'95%',alignSelf:"center",marginTop:10}}> 

        {ListData.length>0?
        <FlashList
                //style={styles.list}
                data={ListData}
                renderItem={({ item }) => <ItemHoaDon data={item}/>}                      
                ListFooterComponent={renderLoad}
                getItemLayout={getItemLayout}
                onEndReached={loadMoreItems}    
                estimatedItemSize={100}
                onEndReachedThreshold={0.3}
        />         
        : 
          <>
              <Text style={{paddingHorizontal:10,color:'red',fontWeight:500}}>Không có dữ liệu.</Text>          
          </> }
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




