import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen.js";

export default function App() {
  return (
    <>
      {/* NOTE changing the statusbar to light changes the icons like wifi and battery to white instead of dark */}
      <StatusBar style="light" />
      <CategoriesScreen />
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
