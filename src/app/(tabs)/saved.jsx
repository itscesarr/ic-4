import { Ionicons } from "@expo/vector-icons";
import { Typography } from "design_component";
import { FlatList, StyleSheet, View } from "react-native";
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
        ListHeaderComponent={<Typography color="primary900" style={styles.title} variant="display-sm" weight="bold">Saved</Typography>}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons name="star-outline" size={43} color={colors.green} />
            <Typography color="primary900" style={styles.emptyTitle} variant="text-lg" weight="bold">No saved trails yet</Typography>
            <Typography align="center" color="tertiary600" style={styles.emptyText} variant="text-sm">
              Star a trail in Explore to keep it here for your next adventure.
            </Typography>
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
  title: { marginBottom: 15 },
  empty: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    gap: 10,
    marginTop: 20,
    padding: 30,
  },
  emptyTitle: {},
  emptyText: {},
});
