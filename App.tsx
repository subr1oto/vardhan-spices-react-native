import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { useCallback } from "react";
// import MainContainer from "./navigation/MainContainer";
import { StatusBar, StyleSheet, Text, View } from "react-native";
// import exercises from "./src/assets/data/exercises.json";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();
export default function App() {
  // const exercise = exercises[0];
  const [fontsLoaded] = useFonts({
    regular: require("./src/assets/fonts/Poppins-Regular.ttf"),
    light: require("./src/assets/fonts/Poppins-Light.ttf"),
    bold: require("./src/assets/fonts/Poppins-Bold.ttf"),
    medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.dark} />
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer> */}
      {/* <MainContainer /> */}
      <View style={styles.container}>
        <Text style={styles.textStyle}> to start wowrking on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontFamily: "semibold",
    fontSize: 20,
  },
});
