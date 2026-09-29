//create a card component that takes in a title, subtitle, and image as props and displays them in a card layout
//this card needs to have information about hiking trails.
//the card should have a title, subtitle, and image of the trail
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Color, Radii, Spacing } from "design_component";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
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
  title: { color: Color.text.primary900, fontSize: 16, fontWeight: "700" },
  subtitle: { color: Color.text.tertiary600, fontSize: 14, marginTop: Spacing[1] },
});
