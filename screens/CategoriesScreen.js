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

const renderCategoryItem = (itemData) => {
  return (
    <CategoryComp title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
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
