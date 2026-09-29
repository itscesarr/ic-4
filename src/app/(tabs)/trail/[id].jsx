import { Ionicons } from "@expo/vector-icons";
import { Typography } from "design_component";
import { router, useLocalSearchParams } from "expo-router";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { useTrailMate } from "../../../../components/trail-mate-store";
import {
  colors,
  difficultyColor,
  formatDistance,
  formatElevation,
  formatTime,
} from "../../../../components/ui";

export default function TrailDetailScreen() {
  const { id } = useLocalSearchParams();
  const { trails, savedIds, toggleSaved, units } = useTrailMate();
  const trail = trails.find((item) => String(item.id) === String(id));
  if (!trail)
    return (
      <View style={styles.missing}>
        <Typography
          color="primary900"
          style={styles.missingTitle}
          variant="text-xl"
          weight="bold"
        >
          Trail not found
        </Typography>
        <Pressable onPress={() => router.back()}>
          <Typography
            color="successPrimary600"
            style={styles.backText}
            variant="text-md"
            weight="bold"
          >
            Go back
          </Typography>
        </Pressable>
      </View>
    );
  const saved = savedIds.includes(trail.id);
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.imageWrap}>
        <Image
          accessibilityLabel={`${trail.name} scenery`}
          source={{ uri: trail.imageLink }}
          style={styles.hero}
        />
        <Pressable
          accessibilityLabel="Go back"
          onPress={() => router.back()}
          style={[styles.roundButton, styles.back]}
        >
          <Ionicons color={colors.white} name="arrow-back" size={25} />
        </Pressable>
        <Pressable
          accessibilityLabel={saved ? "Remove from saved trails" : "Save trail"}
          onPress={() => toggleSaved(trail.id)}
          style={[styles.roundButton, styles.star]}
        >
          <Ionicons
            color={saved ? "#F5AC28" : colors.text}
            name={saved ? "star" : "star-outline"}
            size={26}
          />
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.titleRow}>
          <Typography
            color="primary900"
            style={styles.title}
            variant="display-xs"
            weight="bold"
          >
            {trail.name}
          </Typography>
          <Typography
            color="white"
            style={[
              styles.badge,
              { backgroundColor: difficultyColor(trail.difficulty) },
            ]}
            variant="text-xs"
            weight="bold"
          >
            {trail.difficulty}
          </Typography>
        </View>
        <View style={styles.metrics}>
          <Metric
            icon="location"
            label="Distance"
            value={formatDistance(trail.distance, units)}
          />
          <Metric
            icon="trending-up"
            label="Elevation"
            value={formatElevation(trail.elevation, units)}
          />
          <Metric
            icon="time"
            label="Time"
            value={formatTime(trail.estimatedHikeTime)}
          />
        </View>
        <View style={styles.rule} />
        <Typography
          color="primary900"
          style={styles.heading}
          variant="text-lg"
          weight="bold"
        >
          Description
        </Typography>
        <Typography
          color="secondary700"
          style={styles.description}
          variant="text-sm"
        >
          {trail.description}
        </Typography>
        <Typography
          color="primary900"
          style={styles.heading}
          variant="text-lg"
          weight="bold"
        >
          Trail map
        </Typography>
        <Image
          accessibilityLabel={`${trail.name} trail map preview`}
          source={{ uri: trail.mapPreview }}
          style={styles.map}
        />
        <Pressable
          accessibilityRole="button"
          onPress={() =>
            Alert.alert(
              "Navigation ready",
              `TrailMate is ready to guide you to ${trail.name}.`,
            )
          }
          style={styles.navigate}
        >
          <Ionicons color={colors.white} name="navigate" size={19} />
          <Typography
            color="white"
            style={styles.navigateText}
            variant="text-md"
            weight="bold"
          >
            Start Navigation
          </Typography>
        </Pressable>
      </View>
    </ScrollView>
  );
}
function Metric({ icon, label, value }) {
  return (
    <View style={styles.metric}>
      <Ionicons color={colors.text} name={icon} size={20} />
      <Typography
        color="primary900"
        style={styles.metricValue}
        variant="text-sm"
        weight="bold"
      >
        {value}
      </Typography>
      <Typography
        color="tertiary600"
        style={styles.metricLabel}
        variant="text-xs"
      >
        {label}
      </Typography>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { backgroundColor: colors.background, flex: 1 },
  content: { paddingBottom: 28 },
  imageWrap: { height: 275, position: "relative" },
  hero: { height: "100%", width: "100%" },
  roundButton: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.94)",
    borderRadius: 25,
    height: 48,
    justifyContent: "center",
    position: "absolute",
    top: 20,
    width: 48,
  },
  back: { backgroundColor: "rgba(32,47,42,0.6)", left: 18 },
  star: { right: 18 },
  body: { padding: 20 },
  titleRow: { alignItems: "center", flexDirection: "row", gap: 9 },
  title: { flex: 1 },
  badge: {
    borderRadius: 13,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textTransform: "capitalize",
  },
  metrics: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 22,
  },
  metric: { alignItems: "center", flex: 1, gap: 4 },
  metricValue: {},
  metricLabel: {},
  rule: { backgroundColor: "#DBDED9", height: 1, marginTop: 20 },
  heading: { marginTop: 20 },
  description: { marginTop: 8 },
  map: {
    borderColor: "#DADED8",
    borderRadius: 14,
    borderWidth: 1,
    height: 150,
    marginTop: 10,
    width: "100%",
  },
  navigate: {
    alignItems: "center",
    backgroundColor: colors.green,
    borderRadius: 13,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginTop: 26,
    minHeight: 54,
  },
  navigateText: {},
  missing: {
    alignItems: "center",
    backgroundColor: colors.background,
    flex: 1,
    gap: 14,
    justifyContent: "center",
  },
  missingTitle: {},
  backText: {},
});
