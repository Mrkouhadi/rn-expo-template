import { View, ToastAndroid, Button, Platform } from "react-native";
import React from "react";
import ColoredList from "@/components/ColoredList";

const profile = () => {
  function showToast() {
    Platform.OS === "android"
      ? ToastAndroid.show("Request sent successfully!", ToastAndroid.SHORT)
      : console.log("It is not working on IOS");
  }
  return (
    <View style={{ flex: 1, paddingVertical: 50 }}>
      {/* <ColoredList color="pink" /> */}
      <Button title="Show Toast" onPress={showToast} />
    </View>
  );
};

export default profile;
