import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import NavBar from "@/components/Navbar";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

export default function Index() {
  const logoOpacity = useSharedValue(0); // For fade-in animation
  const textPosition = useSharedValue(100); // For slide-up animation

  useEffect(() => {
    // Trigger animations when the component mounts
    logoOpacity.value = withTiming(1, { duration: 1000 }); // Fade-in duration 1 second
    textPosition.value = withTiming(0, { duration: 800 }); // Slide-up duration 800ms
  }, []);

  // Animated styles for the logo
  const animatedLogoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value, // Bind opacity to shared value
  }));

  // Animated styles for the text
  const animatedTextStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: textPosition.value }], // Slide up by adjusting translateY
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.logoBox}>
            <Animated.Image
              source={require("../assets/images/logo.png")}
              style={[styles.logo, animatedLogoStyle]} // Apply the animated style
            />
          </View>
          <Animated.Text style={[styles.welcomeTxt, animatedTextStyle]}>
            Empowering the Nation is a transformative initiative founded in 2018
            by Precious Radebe, dedicated to equipping domestic workers and
            gardeners in Johannesburg with essential skills. Our hands-on
            training programs, ranging from impactful six-week modules to
            comprehensive six-month learnerships, empower individuals to unlock
            their potential and seize better job opportunities. By investing in
            their futures, we aim to strengthen communities and inspire economic
            growth. Join us in creating a brighter, more prosperous future—
            together, we can empower a nation!
          </Animated.Text>
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
