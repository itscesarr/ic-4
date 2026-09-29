import { Ionicons } from "@expo/vector-icons";
import { Typography } from "design_component";
import { router } from "expo-router";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  View,
} from "react-native";
import { useTrailMate } from "../../../components/trail-mate-store";
import { colors } from "../../../components/ui";
export default function ProfileScreen() {
  const { notificationsEnabled, setNotificationsEnabled, units, setUnits } =
    useTrailMate();
  const confirmLogout = () =>
    Alert.alert(
      "Log out of TrailMate?",
      "You can continue again as the demo user anytime.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Log out",
          style: "destructive",
          onPress: () => router.replace("/signed-out"),
        },
      ],
    );
  return (
    <ScrollView contentContainerStyle={styles.content} style={styles.screen}>
      <Typography color="primary900" style={styles.title} variant="display-sm" weight="bold">Profile</Typography>
      <View style={styles.hero}>
        <Image
          accessibilityLabel="Demo hiker profile photo"
          source={{
            uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
          }}
          style={styles.avatar}
        />
        <View>
          <Typography color="primary900" style={styles.name} variant="text-lg" weight="bold">Alex Morgan</Typography>
          <Typography color="tertiary600" style={styles.count} variant="text-sm">12 trails hiked</Typography>
        </View>
      </View>
      <Typography color="tertiary600" style={styles.section} variant="text-xs" weight="bold">SETTINGS</Typography>
      <View style={styles.group}>
        <Setting
          icon="notifications-outline"
          label="Notifications"
          accessory={
            <Switch
              accessibilityLabel="Enable notifications"
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#D4D7DC", true: "#9FD4B2" }}
              thumbColor={notificationsEnabled ? colors.green : "#FFFFFF"}
              value={notificationsEnabled}
            />
          }
        />
        <View style={styles.divider} />
        <Setting
          icon="speedometer-outline"
          label="Preferred units"
          value={units === "imperial" ? "Miles & feet" : "Kilometers & meters"}
          onPress={() => setUnits(units === "imperial" ? "metric" : "imperial")}
        />
        <View style={styles.divider} />
        <Setting
          icon="information-circle-outline"
          label="About TrailMate"
          onPress={() => router.push("/about")}
        />
      </View>
      <Pressable
        accessibilityRole="button"
        onPress={confirmLogout}
        style={styles.logout}
      >
        <Ionicons name="log-out-outline" color="#B83939" size={21} />
        <Typography color="errorPrimary600" style={styles.logoutText} variant="text-md" weight="bold">Log out</Typography>
      </Pressable>
    </ScrollView>
  );
}
function Setting({ icon, label, value, accessory, onPress }) {
  const inner = (
    <>
      <Ionicons color={colors.green} name={icon} size={22} />
      <Typography color="primary900" style={styles.settingLabel} variant="text-md" weight="semibold">{label}</Typography>
      {value ? <Typography color="tertiary600" style={styles.value} variant="text-sm">{value}</Typography> : null}
      {accessory ??
        (onPress ? (
          <Ionicons color="#8B93A1" name="chevron-forward" size={20} />
        ) : null)}
    </>
  );
  return onPress ? (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={styles.row}
    >
      {inner}
    </Pressable>
  ) : (
    <View style={styles.row}>{inner}</View>
  );
}
const styles = StyleSheet.create({
  screen: { backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 38 },
  title: { marginBottom: 20 },
  hero: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    flexDirection: "row",
    gap: 15,
    padding: 18,
  },
  avatar: { borderRadius: 33, height: 66, width: 66 },
  name: {},
  count: { marginTop: 4 },
  section: { letterSpacing: 1, marginBottom: 8, marginTop: 28 },
  group: { backgroundColor: "#FFFFFF", borderRadius: 16, overflow: "hidden" },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    minHeight: 58,
    paddingHorizontal: 16,
  },
  settingLabel: { flex: 1 },
  value: {},
  divider: { backgroundColor: "#E9EBE8", height: 1, marginLeft: 50 },
  logout: {
    alignItems: "center",
    backgroundColor: "#FFF5F4",
    borderRadius: 15,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginTop: 26,
    minHeight: 52,
  },
  logoutText: {},
});
