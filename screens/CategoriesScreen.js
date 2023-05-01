import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  FlatList,
} from "react-native";
import { CATEGORIES } from "../data/dummyData.js";
import CategoryComp from "../components/CategoryComp.js";

// NOTE since this is a react native navigation screen, we can destructure navigation in this component
const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const handleNavigate = () => {
      navigation.navigate("MealsOverview");
    };
    return (
      <CategoryComp
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handleNavigate}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
