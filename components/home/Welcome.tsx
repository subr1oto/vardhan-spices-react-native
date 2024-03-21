import {
  DimensionValue,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import { StyleSheetType } from "../../interfaces.td";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  Search: undefined;
  // Add other screen definitions here if needed
};

// Add type annotation for navigation
type SearchScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Search"
>;

export default function Welcome() {
  const navigation = useNavigation<SearchScreenNavigationProp>();

  const styleName = (color?: string, top?: DimensionValue): StyleSheetType => {
    return styles({ color, top });
  };

  return (
    <View>
      <View style={{ ...styles({}).container }}>
        <Text
          style={{
            ...styles({ color: COLORS.black, top: SIZES.xSmall }).welcomeText,
          }}
        >
          Find the most
        </Text>
        <Text
          style={{ ...styles({ color: COLORS.primary, top: -10 }).welcomeText }}
        >
          Luxurious Spices
        </Text>
      </View>

      <View style={{ ...styles({}).searchContainer }}>
        <TouchableOpacity>
          <Feather
            name="search"
            size={24}
            style={{ ...styles({}).searchIcon }}
          />
        </TouchableOpacity>
        <View style={{ ...styles({}).searchWrapper }}>
          <TextInput
            style={{ ...styles({}).searchInput }}
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={{ ...styles({}).searchBtn }}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.green}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
