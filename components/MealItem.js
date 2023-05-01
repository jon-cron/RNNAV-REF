import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  Image,
  Platform,
} from "react-native";

const MealItem = ({ title, imgUrl, complexity, duration, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: imgUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
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
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "space-evenly",
  },
});

export default MealItem;
