import React from "react";
import { Text, View, StyleSheet, Button, Pressable, Image } from "react-native";

const MealItem = ({ title, imgUrl, complexity, duration, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: imgUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text>{duration}(minutes) </Text>
          <Text>{complexity.toUpperCase()} </Text>
          <Text>{affordability.toUpperCase()} </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});

export default MealItem;
