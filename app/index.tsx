import { Image, StyleSheet, Text, View } from "react-native";
import Color from "@/constant/Colors";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.WHITE,
      }}
    >
      <Image
        source={require("./../assets/images/landing.png")}
        style={{
          marginTop: 70,
          width: "100%",
          height: 300,
        }}
      />
      <View
        style={{
          padding: 25,
          height: "100%",
          backgroundColor: Color.PRIMARY,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            color: Color.WHITE,
            fontFamily: "outfit-bold",
          }}
        >
          Welcome to Coaching Guru
        </Text>

        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: Color.WHITE,
            fontFamily: "outfit",
          }}
        >
          Transform your ideas into engaing educational content effortlessly
          with AI!🤖
        </Text>
        <View style={styles.button}>
          <Text style={[styles.buttonText, { color: Color.PRIMARY }]}>
            Get Started
          </Text>
        </View>
        <View
          style={[
            styles.button,
            {
              borderWidth: 1,
              borderColor: Color.WHITE,
              backgroundColor: Color.PRIMARY,
            },
          ]}
        >
          <Text style={[styles.buttonText, { color: Color.WHITE }]}>
            Already have an Account?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: Color.WHITE,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "outfit",
  },
});
