import React from "react";
import { Text, View, StyleSheet, Button, Pressable, Image } from "react-native";

const MealItem = ({ title, imgUrl }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: imgUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
