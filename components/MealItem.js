import React from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";

const MealItem = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MealItem;
