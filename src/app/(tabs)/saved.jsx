import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Loading } from "./index";
import { TrailCard } from "../../../components/trail-card";
import { useTrailMate } from "../../../components/trail-mate-store";
import { colors } from "../../../components/ui";
export default function SavedScreen() {
  const { trails, ready, savedIds, toggleSaved, units } = useTrailMate();
  const savedTrails = trails.filter((trail) => savedIds.includes(trail.id));
  if (!ready) return <Loading label="Loading saved trails…" />;
  return (
    <View style={styles.screen}>
      <FlatList
        data={savedTrails}
        keyExtractor={(trail) => String(trail.id)}
        contentContainerStyle={styles.list}
        ListHeaderComponent={<Text style={styles.title}>Saved</Text>}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="star-outline" size={43} color={colors.green} />
            <Text style={styles.emptyTitle}>No saved trails yet</Text>
            <Text style={styles.emptyText}>
              Star a trail in Explore to keep it here for your next adventure.
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TrailCard
            trail={item}
            saved
            onToggleSaved={() => toggleSaved(item.id)}
            units={units}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { backgroundColor: colors.background, flex: 1 },
  list: { padding: 20, paddingBottom: 30 },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 15,
  },
  empty: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    gap: 10,
    marginTop: 20,
    padding: 30,
  },
  emptyTitle: { color: colors.text, fontSize: 19, fontWeight: "800" },
  emptyText: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
});
