import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TrailCard } from "design_component";

import hikes from "../hikeData.json";

const demoHike = hikes.find((hike) => hike.imageLink.startsWith("https")) ?? hikes[0];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>TRAIL CARD DEMO</Text>
          <Text style={styles.title}>Featured hike</Text>
          <Text style={styles.subtitle}>
            Data is loaded from hikeData.json.
          </Text>
        </View>

        <TrailCard
          name={demoHike.name}
          imageUrl={demoHike.imageLink}
          difficulty={demoHike.difficulty}
          trailDistance={`${demoHike.distance} mi`}
          estimateHikeTime={`${demoHike.estimatedHikeTime} min`}
          saved
          style={styles.card}
        />

        <TrailCard
          name={demoHike.name}
          imageUrl={demoHike.imageLink}
          difficulty={demoHike.difficulty}
          trailDistance={`${demoHike.distance} mi`}
          estimateHikeTime={`${demoHike.estimatedHikeTime} min`}
          saved
          style={styles.card}
        />

        <TrailCard
          name={demoHike.name}
          imageUrl={demoHike.imageLink}
          difficulty={demoHike.difficulty}
          trailDistance={`${demoHike.distance} mi`}
          estimateHikeTime={`${demoHike.estimatedHikeTime} min`}
          saved
          style={styles.card}
        />

        <TrailCard
          name={demoHike.name}
          imageUrl={demoHike.imageLink}
          difficulty={demoHike.difficulty}
          trailDistance={`${demoHike.distance} mi`}
          estimateHikeTime={`${demoHike.estimatedHikeTime} min`}
          saved
          style={styles.card}
        />

        <TrailCard
          name={demoHike.name}
          imageUrl={demoHike.imageLink}
          difficulty={demoHike.difficulty}
          trailDistance={`${demoHike.distance} mi`}
          estimateHikeTime={`${demoHike.estimatedHikeTime} min`}
          saved
          style={styles.card}
        />

        <TrailCard
          name={demoHike.name}
          imageUrl={demoHike.imageLink}
          difficulty={demoHike.difficulty}
          trailDistance={`${demoHike.distance} mi`}
          estimateHikeTime={`${demoHike.estimatedHikeTime} min`}
          saved
          style={styles.card}
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#F7F8F4",
    flex: 1,
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    gap: 6,
    marginBottom: 20,
  },
  eyebrow: {
    color: "#467A45",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
  },
  title: {
    color: "#1A261A",
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    color: "#536253",
    fontSize: 16,
  },
  card: {
    width: "100%",
  },
});
