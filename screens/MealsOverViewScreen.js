import React from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { MEALS } from "../data/dummyData.js";

const MealsOverViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meals OverView Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverViewScreen;
