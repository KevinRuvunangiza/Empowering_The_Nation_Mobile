import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavBar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

export default function Detail() {
  const { name, price, description, image } = useLocalSearchParams();
  const router = useRouter();

  const colors = {
    mainColor: "#1E1E1E",
    secondaryColor: "#FFFFFF",
    accentColor: "#FFC107",
  };

  const addToCart = async (isBuyNow = false) => {
    try {
      const item = { 
        name, 
        price: parseFloat(price as string), 
        description, 
        image 
      };
      const existingCart = await AsyncStorage.getItem('cart');
      const cart = existingCart ? JSON.parse(existingCart) : [];
      cart.push(item);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      
      if (isBuyNow) {
        Alert.alert('Success', 'Item purchased and added to cart!');
        router.push('/cart'); // Navigate to cart page
      } else {
        Alert.alert('Success', 'Item added to cart!');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      Alert.alert('Error', 'Failed to add item to cart');
    }
  };

  const handleBuy = () => {
    addToCart(true);
  };

  const handleAddToCart = () => {
    addToCart(false);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: colors.secondaryColor,
    },
    imageContainer: {
      alignItems: "center",
      marginBottom: 20,
    },
    courseImage: {
      width: 300, // Increased size for better display
      height: 300,
      borderRadius: 20,
      overflow: "hidden",
    },
    textContainer: {
      marginVertical: 10,
      paddingHorizontal: 20, // Adjusted for better spacing
      alignItems: 'flex-start',
    },
    courseName: {
      fontSize: 28,
      fontWeight: "bold",
      textAlign: "left",
      color: colors.mainColor,
      marginBottom: 10,
    },
    coursePrice: {
      fontSize: 24,
      fontWeight: "600",
      textAlign: "left",
      marginBottom: 10,
    },
    courseDescription: {
      fontSize: 16,
      color: "#666",
      textAlign: "left",
      marginBottom: 15,
      lineHeight: 24, // Improved readability
    },
    buyBtn: {
      backgroundColor: 'black',
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 30,
      alignItems: "center",
      alignSelf: 'center',
      marginTop: 20, // Reduced margin for better alignment
      elevation: 3, // Adds a slight shadow for depth
    },
    buyBtnTxt: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.secondaryColor,
    },

    addBtn: {
      backgroundColor: Colors.light.tabIconSelected,
      paddingVertical: 15,
      paddingHorizontal: 40,
      borderRadius: 30,
      alignItems: "center",
      alignSelf: 'center',
      marginTop: 20, // Reduced margin for better alignment
      elevation: 3, // Adds a slight shadow for depth
    },
    addBtnTxt: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.secondaryColor,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.courseImage}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.courseName}>{name as string}</Text>
        <Text style={styles.coursePrice}>R{price as string}</Text>
        <Text style={styles.courseDescription}>{description as string}</Text>
      </View>

      <TouchableOpacity style={styles.buyBtn} onPress={handleBuy}>
        <Text style={styles.buyBtnTxt}>BUY</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addBtn} onPress={handleAddToCart}>
        <Text style={styles.addBtnTxt}>ADD TO CART</Text>
      </TouchableOpacity>

      <NavBar />
    </SafeAreaView>
  );
}
  

