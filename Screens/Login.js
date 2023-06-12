import { StatusBar } from "expo-status-bar";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  return (
    <View style={styles.hd}>
      <Text style={styles.hd_text}>Đăng nhập</Text>
    </View>
  );
};

const Body = () => {
  return (
    <View style={styles.bd}>
      <Text style={styles.hd_text}>Body</Text>
      <View style={{ paddingHorizontal: 15 }}>
        <TextInput
          style={{ backgroundColor: "#fff", height: 50, fontSize: 17 }}
          placeholder="tên đăng nhập"
        ></TextInput>
        <TextInput
          style={{ backgroundColor: "#fff", height: 50, fontSize: 17 }}
          placeholder="tên đăng nhập"
        ></TextInput>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.ft}>
      <Text style={styles.hd_text}>Footer</Text>
    </View>
  );
};

export default function Login() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Body />
      <Footer />
      <TouchableOpacity
        style={{ backgroundColor: "gray" }}
        onPress={() => navigation.replace("Home")}
      >
        <Text style={{ color: "white" }}>Go to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyC paddinv
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
  },

  bd: {
    flex: 2,
    backgroundColor: "gray",
  },

  ft: {
    flex: 1,
    backgroundColor: "white",
  },
});
