import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login() {  
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
      <Text>Man hinh Login</Text>      

      <TouchableOpacity style={{backgroundColor:'gray'}}
        onPress={()=> navigation.replace('Home')}
      >
         <Text style={{color:'white'}} >Go to Home</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
