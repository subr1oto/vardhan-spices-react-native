import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants/theme";

export default function Carousel() {
  const slides = [
    "https://badshahmasala.com/wp-content/uploads/2023/07/523426660-category-banners-03-scaled.jpg",
    "https://img.freepik.com/premium-photo/indian-herbs-spices-different-bowl-condiments-top-view-dark-background_78502-274.jpg",
    "https://www.vlcspices.com/wp-content/uploads/2023/05/THE-CHEF-CO-Amazon-Product-Images-Bannerrevised.jpg",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
