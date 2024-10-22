import { Text, View, StyleSheet, Linking, Pressable, ScrollView } from "react-native";
import NavBar from "@/components/Navbar";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

export default function Index() {

  const handleLinkPress = (url) => {
    Linking.openURL(url);
  };

  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmailPress = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.titleTxt}>CONTACT US</Text>

        {/* IIE MSA Campus */}
        <View style={styles.section}>
          <View style={styles.locationContainer}>
            <FontAwesome5 name="map-marker-alt" size={40} style={styles.icon} color={Colors.light.accent} />
            <Text style={styles.headingTxt}>IIE MSA</Text>
            <Pressable onPress={() => handleLinkPress("https://www.iiemsa.co.za")}>
              <Text style={styles.linkTxt}>Visit IIE MSA Location</Text>
            </Pressable>
            <View style={styles.infoRow}>
              <FontAwesome5 name="phone" size={20} style={styles.iconSmall} color={Colors.light.accent} />
              <Pressable onPress={() => handlePhonePress("0119504000")}>
                <Text style={styles.bodyTxt}>Contact: 011 950 4000</Text>
              </Pressable>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome5 name="envelope" size={20} style={styles.iconSmall} color={Colors.light.accent} />
              <Pressable onPress={() => handleEmailPress("enquiries@iiemsa.co.za")}>
                <Text style={styles.bodyTxt}>Email: enquiries@iiemsa.co.za</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* IIE Vega Campus */}
        <View style={styles.section}>
          <View style={styles.locationContainer}>
            <FontAwesome5 name="map-marker-alt" size={40} style={styles.icon} />
            <Text style={styles.headingTxt}>IIE Vega</Text>
            <Pressable onPress={() => handleLinkPress("https://www.vegaschool.com")}>
              <Text style={styles.linkTxt}>Visit IIE Vega Location</Text>
            </Pressable>
            <View style={styles.infoRow}>
              <FontAwesome5 name="phone" size={20} style={styles.iconSmall} />
              <Pressable onPress={() => handlePhonePress("0115214600")}>
                <Text style={styles.bodyTxt}>Contact: (011) 521 4600</Text>
              </Pressable>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome5 name="envelope" size={20} style={styles.iconSmall} />
              <Pressable onPress={() => handleEmailPress("jhb@vegaschool.com")}>
                <Text style={styles.bodyTxt}>Email: jhb@vegaschool.com</Text>
              </Pressable>
            </View>
          </View>
        </View>

        {/* IIE Varsity College Campus */}
        <View style={styles.section}>
          <View style={styles.locationContainer}>
            <FontAwesome5 name="map-marker-alt" size={40} style={styles.icon} />
            <Text style={styles.headingTxt}>IIE Varsity College</Text>
            <Pressable onPress={() => handleLinkPress("https://www.varsitycollege.co.za")}>
              <Text style={styles.linkTxt}>Visit IIE Varsity College Location</Text>
            </Pressable>
            <View style={styles.infoRow}>
              <FontAwesome5 name="phone" size={20} style={styles.iconSmall} />
              <Pressable onPress={() => handlePhonePress("0117846939")}>
                <Text style={styles.bodyTxt}>Contact: 011 784 6939</Text>
              </Pressable>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome5 name="envelope" size={20} style={styles.iconSmall} />
              <Pressable onPress={() => handleEmailPress("ct@varsitycollege.co.za")}>
                <Text style={styles.bodyTxt}>Email: ct@varsitycollege.co.za</Text>
              </Pressable>
            </View>
          </View>
        </View>

      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  titleTxt: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom:40
  },
  section: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 15,
    backgroundColor: Colors.light.background,
    borderRadius: 10,
    width: "100%",
  },
  headingTxt: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
    color:'white'
  },
  bodyTxt: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
    color:'white'
  },
  linkTxt: {
    fontSize: 16,
    color: "#1E90FF",
    marginVertical: 10,
   
  },
  icon: {
    marginBottom: 10,
    color:Colors.light.accent
  },
  iconSmall: {
    marginRight: 10,
    color:Colors.light.foreground
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
});
