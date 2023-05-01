import React from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";

const CategoryComp = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CategoryComp;
