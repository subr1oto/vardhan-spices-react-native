// import { StatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/view/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import COLORS from "./src/consts/colors";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./src/view/screens/DetailsScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.dark} />
      <Stack.Navigator screenOptions={{ header: () => null }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
