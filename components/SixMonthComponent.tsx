import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import NavBar from "@/components/Navbar";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

export const courseMonthData = [
  {
    courseImg: require("../assets/images/first_aid.jpg"),
    courseName: "First Aid",
    courseDescription: "To provide first aid awareness and basic life support",
    coursePrice: 1500,
  },
  {
    courseImg: require("../assets/images/sewing.jpg"),
    courseName: "Sewing",
    courseDescription: "To provide alterations and new garment tailoring services",
    coursePrice: 1500,
  },
  {
    courseImg: require("../assets/images/landscaping.jpg"),
    courseName: "Landscaping",
    courseDescription: "To provide landscaping services for new and established gardens",
    coursePrice: 1500,
  },

  {
    courseImg: require("../assets/images/life_skills.jpg"),
    courseName: "Life Skills",
    courseDescription: "To provide skills to navigate basic life necessities",
    coursePrice: 1500,
  },
];

export default function SixMonthComponent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.image} />
      </View>
      <View style={styles.courseDetails}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          {props.courseName}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>R{props.price}</Text>
        <Text style={{width:200}}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop:25
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 14,
  },
  imageContainer: {},

  courseDetails: {
    rowGap: 10,
    marginLeft: 20,
  },
});
