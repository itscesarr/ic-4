//create a card component that takes in a title, subtitle, and image as props and displays them in a card layout
//this card needs to have information about hiking trails.
//the card should have a title, subtitle, and image of the trail
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Color, Radii, Spacing, Typography } from "design_component";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Typography color="primary900" style={styles.title} variant="text-md" weight="bold">{title}</Typography>
        <Typography color="tertiary600" style={styles.subtitle} variant="text-sm">{subtitle}</Typography>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.background.primary,
    borderRadius: Radii.md,
    flexDirection: "row",
    overflow: "hidden",
  },
  image: { height: 88, width: 112 },
  textContainer: { flex: 1, justifyContent: "center", padding: Spacing[3] },
  title: {},
  subtitle: { marginTop: Spacing[1] },
});
