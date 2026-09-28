//create a card component that takes in a title, subtitle, and image as props and displays them in a card layout
//this card needs to have information about hiking trails.
//the card should have a title, subtitle, and image of the trail
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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