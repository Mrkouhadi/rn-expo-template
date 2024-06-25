/* 
This component is used for animated icons and labels.
if you wanna use, just go to tabBar component and uncomment TabbarButton tag
*/
import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const TabbarButton = (props: any) => {
  const { isFocused, label, routeName, color } = props;
  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);
  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      transform: [{ scale: scaleValue }],
      top,
    };
  });
  const animatedLabelStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return {
      opacity,
    };
  });
  return (
    <Pressable {...props} style={styles.container}>
      <Animated.View style={[animatedIconStyle]}>
        {icons[routeName]({
          color,
        })}
      </Animated.View>
      <Animated.Text
        style={[
          {
            color,
            fontSize: 11,
          },
          animatedLabelStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabbarButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});

interface IconProps {
  size?: number;
  color?: string;
}

export const icons: { [key: string]: (props: IconProps) => JSX.Element } = {
  index: (props: IconProps) => <FontAwesome size={26} name="home" {...props} />,
  explore: (props: IconProps) => (
    <MaterialIcons name="explore" size={26} {...props} />
  ),
  setting: (props: IconProps) => (
    <FontAwesome size={26} name="cog" {...props} />
  ),
  profile: (props: IconProps) => (
    <FontAwesome size={26} name="user" {...props} />
  ),
};
