import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import NavBar from "@/components/Navbar";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

export const courseWeekData = [
  {
    courseImg: require("../assets/images/child_minding.jpg"),
    courseName: "Child Minding",
    courseDescription: "To provide basic child and baby care",
    coursePrice: 750,
  },
  {
    courseImg: require("../assets/images/cooking.jpg"),
    courseName: "Cooking",
    courseDescription: "To prepare and cook nutritious family meals",
    coursePrice: 750,
  },
  {
    courseImg: require("../assets/images/garden_maintenance.jpg"),
    courseName: "Garden Maintenace",
    courseDescription: "To provide basic knowledge of watering, pruning and planting in a domestic garden.",
    coursePrice: 750,
  },
];

export default function SixWeekComponent(props) {
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
