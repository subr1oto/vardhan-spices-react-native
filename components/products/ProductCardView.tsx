import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

export default function ProductCardView() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://badshahmasala.com/wp-content/uploads/2023/07/523426660-category-banners-03-scaled.jpg",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
            dffsffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
          </Text>
          <Text style={styles.supplier}>Product</Text>
          <Text style={styles.price}>$2353</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
