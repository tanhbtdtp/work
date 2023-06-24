import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  Alert
} from 'react-native';
import Carousel from 'react-native-anchor-carousel';

const { width } = Dimensions.get('window');


const images =[
    {
        uri: 'https://vnpt.com.vn/Media/Images/02072021/%E1%BA%A3nh%20g%C3%B3i%20c%C6%B0%E1%BB%9Bc%20MyTV-05%20(2).jpg?w=490&mode=crop',
        title: 'Lorem ipsum dolor sit amet',
        content:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      },
      {
        uri: 'https://banhangvnpt.vn/Uploads/ThumsLibraries/Images/2021/12/03/112423750.jpg?w=315&mode=crop',
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum ',
      },
      {
        uri: 'https://banhangvnpt.vn/Uploads/images/Khuye%CC%82%CC%81n%20ma%CC%83i%20la%CC%86%CC%81p%20ma%CC%A3ng%20u%CC%9Bu%20%C4%91a%CC%83i%20nga%CC%82%CC%81t%20to%CC%82%CC%81c%20%C4%91o%CC%A3%CC%82%20cha%CC%82%CC%81t.jpg',
        title: 'Lorem ipsum dolor',
        content:
          'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      },
      {
        uri: 'https://vnpt.com.vn/Media/Images/13122021/2021131201.jpg',
        title: 'Lorem ipsum dolor',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
      },
      {
        uri: 'https://shopvnptbinhduong.com/wp-content/uploads/2023/02/VD149S-sieu-sim-sale-soc-vinaphone.jpeg',
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
      },

      {
        uri: 'https://vnptlamdong.vn/wp-content/uploads/2019/03/cap-quang-vnpt-600x407.jpg',
        title: 'Lorem ipsum ',
        content: 'Neque porro quisquam est qui dolorem ipsum quia dolor ',
      },
]



export default NumberCarousel =() => {
    
    const renderItem = ({ item, index }) => {        
        return (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              Alert.alert(index.toString());
            }}
          >
            <Image 
               style={{height:100,width:'100%'}}
               source={{
                 uri: item.uri
                }}
             />            
          </TouchableOpacity>
        );
      };

     return (
      <Carousel
        style={styles.carousel}
        data={images}
        renderItem={renderItem}
        itemWidth={200}
        containerWidth={width - 10}        
      />
    ); 
}


const styles = StyleSheet.create({ 
  carousel: {
    flex: 1,
    backgroundColor: '#fff',
    padding:5
  },
  item: {
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',  
    borderColor:'#E5E7E9',
    borderRadius:5,
  },

  text: {
    fontSize: 100,
    fontWeight: 'bold'
  }
});
