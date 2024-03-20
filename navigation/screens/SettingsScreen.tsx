import { View, Text } from "react-native";
import React from "react";
import { NavigationProps } from "../../src/interface.type";

const SettingsScreen = ({ navigation }: NavigationProps) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Settings Screen
      </Text>
    </View>
  );
};

export default SettingsScreen;
