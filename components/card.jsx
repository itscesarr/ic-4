// //create a card component that takes in a title, subtitle, and image as props and displays them in a card layout
// //this card needs to have information about hiking trails.
// //the card should have a title, subtitle, and image of the trail
// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const Card = ({ title, subtitle, image }) => {
//   return (
//     <View style={styles.card}>
//       <Image source={{ uri: image }} style={styles.image} />
//       <View style={styles.textContainer}>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.subtitle}>{subtitle}</Text>
//       </View>
//     </View>
//   );
// }

// export default Card;


import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

import { Color, Radii, Spacing } from "../../tokens/index.js";
import { Typography } from "../Typography.jsx";

const difficultyTokens = {
  easy: { background: Color.background.successSolid, foreground: Color.text.primaryOnBrand },
  medium: { background: Color.background.warningSolid, foreground: Color.text.primary900 },
  moderate: { background: Color.background.warningSolid, foreground: Color.text.primary900 },
  hard: { background: Color.background.errorSolid, foreground: Color.text.primaryOnBrand },
};

/** A compact trail summary with a difficulty badge and saved state. */
export function Card({
  name,
  imageUrl,
  difficulty,
  trailDistance,
  estimateHikeTime,
  saved = false,
  style,
}) {
  const normalizedDifficulty = difficulty.toLowerCase();
  const difficultyStyle = difficultyTokens[normalizedDifficulty] || difficultyTokens.easy;

  return (
    <View style={[styles.card, style]}>
      <Image
        accessibilityLabel={`${name} trail`}
        source={typeof imageUrl === "string" ? { uri: imageUrl } : imageUrl}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Typography variant="text-lg" color="primary900" weight="semibold" style={styles.name}>
            {name}
          </Typography>
          <Star filled={saved} />
        </View>
        <View style={[styles.badge, { backgroundColor: difficultyStyle.background }]}>
          <Typography variant="text-md" color={difficultyStyle.foreground} weight="medium">
            {difficulty}
          </Typography>
        </View>
        <View style={styles.details}>
          <Typography variant="text-md" color="secondary700" weight="medium">
            {trailDistance}
          </Typography>
          <Typography variant="text-md" color="secondary700" weight="medium">·</Typography>
          <Typography variant="text-md" color="secondary700" weight="medium">
            {estimateHikeTime}
          </Typography>
        </View>
      </View>
    </View>
  );
}

function Star({ filled }) {
  return (
    <Svg
      accessibilityLabel={filled ? "Saved trail" : "Unsaved trail"}
      fill={filled ? Color.foreground.warningPrimary : "none"}
      height={28}
      viewBox="0 0 24 24"
      width={28}
      stroke={Color.foreground.warningPrimary}
      strokeWidth={1.8}
    >
      <Path d="m12 2.5 2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.53l-5.88 3.09 1.12-6.55-4.76-4.64 6.58-.96L12 2.5Z" />
    </Svg>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "stretch",
    backgroundColor: Color.background.primary,
    borderColor: Color.border.secondary,
    borderRadius: Radii.lg,
    borderWidth: 1,
    flexDirection: "row",
    overflow: "hidden",
    padding: Spacing[3],
  },
  image: {
    aspectRatio: 1,
    borderRadius: Radii.md,
    height: 120,
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    marginLeft: Spacing[3],
  },
  topRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: Spacing[2],
    justifyContent: "space-between",
  },
  name: { flex: 1 },
  badge: {
    alignSelf: "flex-start",
    borderRadius: Radii.pill,
    paddingHorizontal: Spacing[3],
    paddingVertical: Spacing[1],
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    gap: Spacing[2],
  },
});

export default Card;