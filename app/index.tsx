import { View } from "react-native";
import React from "react";
import ColoredList from "@/components/ColoredList";

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ColoredList color="red" />
    </View>
  );
};

export default Home;
