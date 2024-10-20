import { Text, View, StyleSheet, Image } from "react-native";
import NavBar from "@/components/Navbar";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import CartModal from "@/app/cart";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoBox}>
            <Image
              source={require("../assets/images/placeholder.jpg")}
              style={styles.logo}
            />
          </View>
          <Text style={styles.welcomeTxt}>
            {/* Wrap the long text block within a <Text> component */}
            Empowering the Nation is a transformative initiative founded in 2018
            by Precious Radebe, dedicated to equipping domestic workers and
            gardeners in Johannesburg with essential skills. Our hands-on
            training programs, ranging from impactful six-week modules to
            comprehensive six-month learnerships, empower individuals to unlock
            their potential and seize better job opportunities. By investing in
            their futures, we aim to strengthen communities and inspire economic
            growth. Join us in creating a brighter, more prosperous
            future—together, we can empower a nation!
          </Text>
         
        </ScrollView>
        <NavBar />
      </View>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container fills the screen
  },

  scrollContainer: {
    flexGrow: 1, // Allows the ScrollView to expand and accommodate its children
    justifyContent: "center", // Centers content vertically
    alignItems: "center", // Centers content horizontally
    paddingVertical: 20, // Adds vertical padding to the ScrollView content
    paddingBottom: 100, // Extra space at the bottom for the NavBar
    backgroundColor: "#f0f0f0", // Light background for better contrast
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  logoBox: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    paddingBottom: 40,
    alignItems: "center", // Centers logoBox content
  },

  welcomeTxt: {
    width: "80%",
    textAlign: "center",
    marginTop: 20, // Adjusted margin for spacing
    fontSize: 15, // Slightly larger font for readability
    lineHeight: 24, // Increased line height for better readability
  },
});
