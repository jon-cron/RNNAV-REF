import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import { MEALS } from "../data/dummyData.js";
import MealItem from "../components/MealItem.js";
// import { useRoute } from "@react-navigation/native";
// NOTE you could also use the useRoute hook to accomplish the same thing as imported above
// NOTE any registered screen can access the route or navigation props
const MealsOverViewScreen = ({ route }) => {
  const params = route.params.categoryId;
  const filteredMEals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(params) >= 0;
  });
  const renderMealItem = (itemData) => {
    return (
      <MealItem title={itemData.item.title} imgUrl={itemData.item.imageUrl} />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={filteredMEals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
