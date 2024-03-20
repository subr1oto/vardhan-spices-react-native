import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import COLORS from "../../consts/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SpiceProps } from "../../interface.type";

export default function DetailsScreen({
  navigation,
  route,
}: {
  navigation: { goBack: () => void };
  route: { params: SpiceProps };
}) {
  const spice: SpiceProps = route.params;

  return (
    <>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <View style={style.imageContainer}>
          <Image
            source={spice.img}
            style={{ resizeMode: "contain", flex: 1 }}
          />
        </View>
        <View style={style.detailsContainer}>
          <View
            style={{
              marginLeft: 20,
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View style={style.line} />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Best choice
            </Text>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>
              {spice.name}
            </Text>
            <View style={style.priceTag}>
              <Text
                style={{
                  marginLeft: 15,
                  color: COLORS.white,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                {spice.price}/-
              </Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>About</Text>
            <Text
              style={{
                color: "grey",
                fontSize: 16,
                lineHeight: 22,
                marginTop: 20,
              }}
            >
              {spice.about}
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={style.borderBtn}>
                  <Text style={style.borderBtnText}>-</Text>
                </View>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 10,
                    fontWeight: "bold",
                  }}
                >
                  1
                </Text>
                <View style={style.borderBtn}>
                  <Text style={style.borderBtnText}>+</Text>
                </View>
              </View>
              <View style={style.buyBtn}>
                <Text style={{ color: COLORS.white, fontSize: 18 }}>Buy</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: "center",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  borderBtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 40,
  },
  borderBtnText: { fontWeight: "bold", fontSize: 28 },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});
