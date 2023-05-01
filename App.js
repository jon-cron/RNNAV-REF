// NOTE first run 'npm install @react-navigation/native'
// NOTE then run 'expo install react-native-screens react-native-safe-area-context' IF YOU ARE USING EXPO
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen.js";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <>
      {/* NOTE changing the statusbar to light changes the icons like wifi and battery to white instead of dark */}
      <StatusBar style="light" />
      <NavigationContainer>
        <CategoriesScreen />
      </NavigationContainer>
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
});
