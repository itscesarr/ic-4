import React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "design_component";

import Card from "./card.jsx";

const trailImage =
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80";

const meta = {
  title: "Components/Trail/Card",
  component: Card,
  args: {
    name: "Cedar Ridge Loop",
    imageUrl: trailImage,
    difficulty: "Easy",
    trailDistance: "4.2 mi",
    estimateHikeTime: "2h 15m",
    saved: true,
  },
  argTypes: {
    imageUrl: { control: "text" },
    difficulty: {
      control: "select",
      options: ["Easy", "Medium", "Hard"],
    },
    saved: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <View style={styles.canvas}>
        <View style={styles.cardWidth}>
          <Story />
        </View>
      </View>
    ),
  ],
};

export default meta;

export const SavedEasy = {};

export const UnsavedMedium = {
  args: {
    difficulty: "Medium",
    name: "Granite Peak Trail",
    saved: false,
    trailDistance: "6.8 mi",
    estimateHikeTime: "3h 40m",
  },
};

export const Hard = {
  args: {
    difficulty: "Hard",
    name: "Eagle Crest Summit",
    trailDistance: "9.1 mi",
    estimateHikeTime: "5h 30m",
  },
};

const styles = StyleSheet.create({
  canvas: {
    alignItems: "center",
    backgroundColor: Color.background.secondary,
    justifyContent: "center",
    minHeight: 280,
    padding: 24,
  },
  cardWidth: {
    maxWidth: 680,
    width: "100%",
  },
});
