import { Ionicons } from "@expo/vector-icons";
import { Typography } from "design_component";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../components/ui";
export default function SignedOutScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.icon}>
        <Ionicons color="#FFFFFF" name="compass" size={42} />
      </View>
      <Typography color="primary900" style={styles.title} variant="display-xs" weight="bold">You’re signed out</Typography>
      <Typography align="center" color="tertiary600" style={styles.text} variant="text-md">
        Thanks for exploring TrailMate. You can return anytime as our demo
        hiker.
      </Typography>
      <Pressable
        accessibilityRole="button"
        onPress={() => router.replace("/")}
        style={styles.button}
      >
        <Typography color="white" style={styles.buttonText} variant="text-md" weight="bold">Continue as demo user</Typography>
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
  title: { marginTop: 24 },
  text: { marginTop: 12 },
  button: {
    backgroundColor: colors.green,
    borderRadius: 14,
    marginTop: 30,
    paddingHorizontal: 26,
    paddingVertical: 16,
  },
  buttonText: {},
});
