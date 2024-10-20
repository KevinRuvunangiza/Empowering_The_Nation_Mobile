import React, { useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import CartModal from "../app/cart"; // Assuming CartModal is in the same directory

export default function NavBar() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // Example cart items
  

  const colors = {
    mainColor: "#1E1E1E",
    secondaryColor: "#FFFFFF",
    accentColor: "#FFC107",
  };

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.mainColor,
      justifyContent: 'center',
    },
    view: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingVertical: 10,
      paddingBottom: 25,
    },
    navItem: {
      justifyContent: "center",
      alignItems: "center",
    },
    navText: {
      color: colors.secondaryColor,
      fontSize: 12,
      marginTop: 10,
    },
  });

  // Opens the Cart Modal
  function handleModalOpen() {
    setIsVisible(true);
    
  };

  // Closes the Cart Modal
  function handleModalClose() {
    setIsVisible(false);
    console.log('CLOSING');
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        {/* Courses Tab */}
        <Pressable
          style={styles.navItem}
          onPress={() => router.replace('/courses')}
        >
          <FontAwesome5 name='book-open' color={'white'} size={30} />
          <Text style={styles.navText}>Courses</Text>
        </Pressable>

        {/* Home Tab */}
        <Pressable
          style={styles.navItem}
          onPress={() => router.replace("/")}
        >
          <FontAwesome5 name='home' color={'white'} size={30} />
          <Text style={styles.navText}>Home</Text>
        </Pressable>

        {/* Contact Us Tab */}
        <Pressable
          style={styles.navItem}
          onPress={() => router.replace('/contact')}
        >
          <FontAwesome5 name='address-book' color={'white'} size={30} />
          <Text style={styles.navText}>Contact Us</Text>
        </Pressable>

    
        <Pressable
          style={styles.navItem}
          onPress={()=>router.replace('/cart')}
        >
          <FontAwesome5 name='shopping-cart' color={'white'} size={30} />
          <Text style={styles.navText}>Cart</Text>
        </Pressable>
      </View>
      
    </View>
  );
}
