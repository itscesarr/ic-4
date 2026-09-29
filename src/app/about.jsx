import { Ionicons } from "@expo/vector-icons";
import { Typography } from "design_component";
import { router } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../components/ui";
export default function AboutScreen() {
  return (
    <View style={styles.screen}>
      <Pressable
        accessibilityLabel="Close about TrailMate"
        onPress={() => router.back()}
        style={styles.close}
      >
        <Ionicons name="close" color={colors.text} size={26} />
      </Pressable>
      <Ionicons color={colors.green} name="compass" size={50} />
      <Typography color="primary900" style={styles.title} variant="display-xs" weight="bold">TrailMate</Typography>
      <Typography color="tertiary600" style={styles.version} variant="text-sm">Version 1.0</Typography>
      <Typography align="center" color="secondary700" style={styles.text} variant="text-md">
        TrailMate helps you discover beautiful nearby hikes, save favorites, and
        get outside with confidence.
      </Typography>
      <Typography color="successPrimary600" style={styles.note} variant="text-md" weight="bold">Made for your next adventure.</Typography>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    justifyContent: "center",
    padding: 36,
  },
  close: { position: "absolute", right: 22, top: 60 },
  title: { marginTop: 15 },
  version: { marginTop: 4 },
  text: { marginTop: 30 },
  note: { marginTop: 30 },
});
