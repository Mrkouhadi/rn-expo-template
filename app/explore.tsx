import React, { useState } from "react";
import ColoredList from "@/components/ColoredList";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const explore = () => {
  const [ActiveCat, setActiveCat] = useState<string>("all");

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "pink" }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.header}
        >
          <Text
            onPress={() => setActiveCat("all")}
            style={[
              styles.headerItem,
              ActiveCat === "all" && styles.activeItem,
            ]}
          >
            All
          </Text>
          <Text
            onPress={() => setActiveCat("courses")}
            style={[
              styles.headerItem,
              ActiveCat === "courses" && styles.activeItem,
            ]}
          >
            Courses
          </Text>
          <Text
            onPress={() => setActiveCat("books")}
            style={[
              styles.headerItem,
              ActiveCat === "books" && styles.activeItem,
            ]}
          >
            Books
          </Text>
          <Text
            onPress={() => setActiveCat("ielts")}
            style={[
              styles.headerItem,
              ActiveCat === "ielts" && styles.activeItem,
            ]}
          >
            IELTS
          </Text>
          <Text
            onPress={() => setActiveCat("toefel")}
            style={[
              styles.headerItem,
              ActiveCat === "toefel" && styles.activeItem,
            ]}
          >
            TOEFL
          </Text>
          <Text
            onPress={() => setActiveCat("bac")}
            style={[
              styles.headerItem,
              ActiveCat === "bac" && styles.activeItem,
            ]}
          >
            BAC
          </Text>
          <Text
            onPress={() => setActiveCat("others")}
            style={[
              styles.headerItem,
              ActiveCat === "others" && styles.activeItem,
            ]}
          >
            Others
          </Text>
        </ScrollView>
      </View>
      <ColoredList color="green" />
    </View>
  );
};

export default explore;
const styles = StyleSheet.create({
  header: {
    height: 100,
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 20,
  },
  headerItem: {
    flex: 1,
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 14,
  },
  activeItem: {
    color: "purple",
    fontSize: 18,
  },
});
