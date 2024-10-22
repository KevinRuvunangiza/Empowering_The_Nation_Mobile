import Animated, { useSharedValue, useAnimatedStyle, withSpring, withDelay } from "react-native-reanimated";
import { useEffect, useState } from "react";
import { Text, View, Pressable, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Link } from "expo-router";
import SixWeekComponent from "@/components/SixWeekComponent";
import SixMonthComponent from "@/components/SixMonthComponent";
import { courseMonthData } from "@/components/SixMonthComponent";
import { courseWeekData } from "@/components/SixWeekComponent";
import NavBar from "@/components/Navbar";

export default function Index() {
  const [weekColor, setWeekColor] = useState("black");
  const [monthColor, setMonthColor] = useState("black");
  const [isWeekPrsd, setIsWeekPrsd] = useState(true);
  const [isMonthPrsd, setIsMonthPrsd] = useState(false);

  const jumpValue = useSharedValue(0); // Shared value for animation

  useEffect(() => {
    // Trigger the jump animation with a delay when the component mounts
    jumpValue.value = withDelay(300, withSpring(1, { damping: 8, stiffness: 80 }));
  }, []);

  const animatedJumpStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: jumpValue.value }],
    };
  });

  function handleWeekSelect() {
    if (!isWeekPrsd) {
      setWeekColor("#7289da");
      setMonthColor("black");
      setIsWeekPrsd(true);
      setIsMonthPrsd(false);
    }
  }

  function handleMonthSelect() {
    if (!isMonthPrsd) {
      setMonthColor("#7289da");
      setWeekColor("black");
      setIsMonthPrsd(true);
      setIsWeekPrsd(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.tagWrapper}>
          <Pressable onPress={handleWeekSelect}>
            <View style={[styles.tagContainer, { borderBottomColor: weekColor }]}>
              <Text style={styles.tagTxt}>Six Week Courses</Text>
            </View>
          </Pressable>

          <Pressable onPress={handleMonthSelect}>
            <View style={[styles.tagContainer, { borderBottomColor: monthColor }]}>
              <Text style={styles.tagTxt}>Six Month Courses</Text>
            </View>
          </Pressable>
        </View>

        {/* Use Animated.View to wrap course content and apply animatedJumpStyle */}
        {isWeekPrsd && (
          <Animated.View style={[styles.coursesContainer, animatedJumpStyle]}>
            {courseWeekData.map((course, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/details",
                  params: {
                    name: course.courseName,
                    price: course.coursePrice,
                    description: course.courseDescription,
                    image: course.courseImg,
                  },
                }}
              >
                <SixWeekComponent
                  image={course.courseImg}
                  courseName={course.courseName}
                  price={course.coursePrice}
                  description={course.courseDescription}
                />
              </Link>
            ))}
          </Animated.View>
        )}

        {isMonthPrsd && (
          <Animated.View style={[styles.coursesContainer, animatedJumpStyle]}>
            {courseMonthData.map((course, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/details",
                  params: {
                    name: course.courseName,
                    price: course.coursePrice,
                    description: course.courseDescription,
                    image: course.courseImg,
                  },
                }}
              >
                <SixMonthComponent
                  image={course.courseImg}
                  courseName={course.courseName}
                  price={course.coursePrice}
                  description={course.courseDescription}
                />
              </Link>
            ))}
          </Animated.View>
        )}
      </ScrollView>

      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align items from top to bottom
    alignItems: "center",
    paddingTop: 50, // Add some space from the top
    marginTop: 60,
  },

  scrollContainer: {
    alignItems: "center",
    paddingBottom: 100, // Add padding to prevent content being blocked by the bottom navbar
  },

  tagWrapper: {
    flexDirection: "row", // Tags are side by side
    justifyContent: "center",
    alignItems: "center",
    columnGap: 40, // Space between the tags
  },

  tagTxt: {
    fontSize: 18,
    fontWeight: "bold",
  },

  tagContainer: {
    borderBottomWidth: 4,
    paddingBottom: 10,
    borderBottomEndRadius: 4,
    borderBottomStartRadius: 4,
    borderBottomColor: "black",
  },

  coursesContainer: {
    marginTop: 40, // Space between tags and content
    width: "90%", // Set a width to prevent content from stretching full screen
    alignItems: "flex-start", // Align the course content to the start
  },
});
