import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
const icons = { index: "compass", saved: "bookmark", profile: "person" };
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#1d9452",
        tabBarInactiveTintColor: "#8B93A1",
        tabBarStyle: { borderTopColor: "#E5E7E1", paddingTop: 10, paddingBottom: 10, borderRadius: 50, height: 70, backgroundColor: "#FFFFFF", position: "absolute", bottom: 15, left: 10, right: 10, marginHorizontal: 10, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "700" },
        tabBarIcon: ({ color, size }) => (
          <Ionicons
            name={icons[route.name] ?? "ellipse"}
            color={color}
            size={size}
          />
        ),
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Explore" }} />
      <Tabs.Screen name="saved" options={{ title: "Saved" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="trail/[id]" options={{ href: null }} />
    </Tabs>
  );
}
