import { Ionicons } from "@expo/vector-icons";
import { Typography } from "design_component";
import { useMemo, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { TrailCard } from "../../../components/trail-card";
import { useTrailMate } from "../../../components/trail-mate-store";
import { colors } from "../../../components/ui";
const filters = ["All", "Easy", "Moderate", "Hard"];
export function Loading({ label }) {
  return (
    <View style={styles.center}>
      <ActivityIndicator color={colors.green} size="large" />
      <Typography color="tertiary600" style={styles.loadingText} variant="text-md">{label}</Typography>
    </View>
  );
}
export default function ExploreScreen() {
  const { trails, ready, savedIds, toggleSaved, units } = useTrailMate();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const results = useMemo(
    () =>
      trails.filter(
        (trail) =>
          trail.name.toLowerCase().includes(query.trim().toLowerCase()) &&
          (filter === "All" || trail.difficulty === filter.toLowerCase()),
      ),
    [filter, query, trails],
  );
  if (!ready) return <Loading label="Loading trails…" />;
  return (
    <View style={styles.screen}>
      <FlatList
        data={results}
        keyExtractor={(trail) => String(trail.id)}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <>
            <Typography color="successPrimary600" style={styles.brand} variant="display-sm" weight="bold">TrailMate</Typography>
            <View style={styles.searchBox}>
              <Ionicons name="search" color={colors.muted} size={21} />
              <TextInput
                accessibilityLabel="Search trails"
                autoCapitalize="none"
                onChangeText={setQuery}
                placeholder="Search trails"
                placeholderTextColor="#7B8493"
                style={styles.searchInput}
                value={query}
              />
              {query ? (
                <Pressable
                  accessibilityLabel="Clear search"
                  onPress={() => setQuery("")}
                >
                  <Ionicons
                    name="close-circle"
                    color={colors.muted}
                    size={20}
                  />
                </Pressable>
              ) : null}
            </View>
            <View
              accessibilityLabel="Filter by difficulty"
              style={styles.filters}
            >
              {filters.map((item) => (
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected: filter === item }}
                  key={item}
                  onPress={() => setFilter(item)}
                  style={[
                    styles.filter,
                    filter === item && styles.filterActive,
                  ]}
                >
                  <Typography
                    color={filter === item ? "white" : "secondary700"}
                    style={[
                      styles.filterText,
                      filter === item && styles.filterTextActive,
                    ]}
                    variant="text-sm"
                    weight="bold"
                  >
                    {item}
                  </Typography>
                </Pressable>
              ))}
            </View>
            <Typography color="tertiary600" style={styles.resultLabel} variant="text-sm" weight="semibold">
              {results.length} {results.length === 1 ? "trail" : "trails"}{" "}
              nearby
            </Typography>
          </>
        }
        ListEmptyComponent={
          <View style={styles.empty}>
            <Ionicons
              name="trail-sign-outline"
              color={colors.green}
              size={42}
            />
            <Typography color="primary900" style={styles.emptyTitle} variant="text-lg" weight="bold">No trails found</Typography>
            <Typography align="center" color="tertiary600" style={styles.emptyText} variant="text-sm">
              Try a different search or filter.
            </Typography>
          </View>
        }
        renderItem={({ item }) => (
          <TrailCard
            trail={item}
            saved={savedIds.includes(item.id)}
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
  brand: { marginBottom: 20 },
  searchBox: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#D9DDE2",
    borderRadius: 26,
    borderWidth: 1,
    flexDirection: "row",
    gap: 9,
    height: 50,
    paddingHorizontal: 15,
  },
  searchInput: { color: colors.text, flex: 1, fontSize: 16, height: "100%" },
  filters: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 14 },
  filter: {
    borderColor: "#CCD2DA",
    borderRadius: 17,
    borderWidth: 1,
    minWidth: 72,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  filterActive: { backgroundColor: colors.green, borderColor: colors.green },
  filterText: { textAlign: "center" },
  filterTextActive: {},
  resultLabel: { marginBottom: 10, marginTop: 20 },
  center: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    gap: 12,
    justifyContent: "center",
  },
  loadingText: {},
  empty: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    gap: 9,
    marginTop: 18,
    padding: 28,
  },
  emptyTitle: {},
  emptyText: {},
});
