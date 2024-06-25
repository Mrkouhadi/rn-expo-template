/* 
This component has nothign to do with the cutom tab bar
I am using it just to fill the pages...
*/

import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const ColoredList = ({ color }: any) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {[1, 0.8, 0.6, 0.4, 0.2].map((opacity) => (
        <View
          key={opacity}
          style={[styles.color, { backgroundColor: color, opacity }]}
        />
      ))}
    </ScrollView>
  );
};

export default ColoredList;

const styles = StyleSheet.create({
  color: {
    width: "100%",
    height: 150,
    borderRadius: 25,
    borderCurve: "continuous",
    marginBottom: 15,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    minHeight: "100%",
    paddingBottom: 90,
    paddingTop: 55,
  },
});
