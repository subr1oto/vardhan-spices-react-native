import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme";
import ProductCardView from "./ProductCardView";

export default function ProductRow() {
  const products = [1, 2, 3, 4];
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
}
