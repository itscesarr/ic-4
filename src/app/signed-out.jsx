import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../components/ui";
export default function SignedOutScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.icon}>
        <Ionicons color="#FFFFFF" name="compass" size={42} />
      </View>
      <Text style={styles.title}>You’re signed out</Text>
      <Text style={styles.text}>
        Thanks for exploring TrailMate. You can return anytime as our demo
        hiker.
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={() => router.replace("/")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Continue as demo user</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
  icon: {
    alignItems: "center",
    backgroundColor: colors.green,
    borderRadius: 38,
    height: 76,
    justifyContent: "center",
    width: 76,
  },
  title: { color: colors.text, fontSize: 27, fontWeight: "800", marginTop: 24 },
  text: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 12,
    textAlign: "center",
  },
  button: {
    backgroundColor: colors.green,
    borderRadius: 14,
    marginTop: 30,
    paddingHorizontal: 26,
    paddingVertical: 16,
  },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
});
