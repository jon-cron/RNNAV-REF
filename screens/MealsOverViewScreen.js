import React from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { MEALS } from "../data/dummyData.js";
// import { useRoute } from "@react-navigation/native";
// NOTE you could also use the useRoute hook to accomplish the same thing as imported above
// NOTE any registered screen can access the route or navigation props
const MealsOverViewScreen = ({ route }) => {
  const params = route.params.categoryId;
  console.log(params);
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
