import { Ionicons } from "@expo/vector-icons";
import { Color, Radii, Spacing, Typography } from "design_component";
import { router } from "expo-router";
import { Image, Pressable, StyleSheet, View } from "react-native";

import { difficultyColor, formatDistance, formatTime } from "./ui";

// Local because TrailMate needs independent card navigation and save actions.
export function TrailCard({ trail, saved, onToggleSaved, units }) {
  return (
    <View style={styles.card}>
      <Pressable accessibilityLabel={`View ${trail.name}`} accessibilityRole="button" onPress={() => router.push(`/(tabs)/trail/${trail.id}`)} style={styles.cardBody}>
        <Image accessibilityLabel="" source={{ uri: trail.imageLink }} style={styles.image} />
        <View style={styles.info}>
          <Typography color="primary900" numberOfLines={1} style={styles.name} variant="text-md" weight="bold">{trail.name}</Typography>
          <Typography color="primaryOnBrand" style={[styles.difficulty, { backgroundColor: difficultyColor(trail.difficulty) }]} variant="text-xs" weight="bold">{trail.difficulty}</Typography>
          <Typography color="secondary700" style={styles.meta} variant="text-sm" weight="semibold">{formatDistance(trail.distance, units)} · {formatTime(trail.estimatedHikeTime)}</Typography>
        </View>
      </Pressable>
      <Pressable accessibilityLabel={saved ? `Remove ${trail.name} from saved trails` : `Save ${trail.name}`} accessibilityRole="button" hitSlop={Spacing[2]} onPress={onToggleSaved} style={styles.star}>
        <Ionicons color={Color.foreground.warningPrimary} name={saved ? "star" : "star-outline"} size={29} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: "center", backgroundColor: Color.background.primary, borderColor: Color.border.secondary, borderRadius: Radii.md, borderWidth: 1, flexDirection: "row", marginBottom: Spacing[3], minHeight: 112, padding: Spacing[3], shadowColor: Color.primitive.base.black, shadowOpacity: 0.08, shadowRadius: 3, shadowOffset: { width: 0, height: 2 }, elevation: 2 },
  cardBody: { alignItems: "center", flex: 1, flexDirection: "row", minHeight: 88 },
  image: { borderRadius: Radii.sm, height: 88, width: 104 },
  info: { flex: 1, marginHorizontal: Spacing[3] },
  name: {},
  difficulty: { alignSelf: "flex-start", borderRadius: Radii.pill, marginTop: Spacing[2], overflow: "hidden", paddingHorizontal: Spacing[3], paddingVertical: Spacing[1], textTransform: "capitalize" },
  meta: { marginTop: Spacing[2] },
  star: { alignItems: "center", height: 48, justifyContent: "center", width: 40 },
});
