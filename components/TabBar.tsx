import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import TabbarButton from "./TabbarButton";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const TabBar = ({ state, descriptors, navigation }: any) => {
  const primaryColor = "#0891b2";
  const greyColor = "#737373";
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        // remove routes: _sitemap & +not-found
        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        // if you want an animated tabbar where icons get bigger and labels get hidden, use TabbarButton component
        // return (
        //   <TabbarButton
        //     key={route.name}
        //     onPress={onPress}
        //     onLongPress={onLongPress}
        //     isFocused={isFocused}
        //     routeName={route.name}
        //     color={isFocused ? primaryColor : greyColor}
        //     label={label}
        //   />
        // );

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabbarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name]({
              color: isFocused ? primaryColor : greyColor,
            })}
            <Text
              style={{
                color: isFocused ? primaryColor : greyColor,
                fontSize: 11,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    bottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    borderCurve: "continuous",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.3,
  },
  tabbarItem: {
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
