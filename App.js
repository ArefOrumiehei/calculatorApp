import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./app/pages/Calculator";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    digital: require("./assets/fonts/digital/digital-7.ttf"),
    digitalMono: require("./assets/fonts/digital/digital-7 (mono).ttf"),
    digitalMonoItalic: require("./assets/fonts/digital/digital-7 (mono italic).ttf"),
    digitalItalic: require("./assets/fonts/digital/digital-7 (italic).ttf"),
    ubuntuR: require("./assets/fonts/ubuntu/Ubuntu-Regular.ttf"),
    ubuntuM: require("./assets/fonts/ubuntu/Ubuntu-Medium.ttf"),
    ubuntuB: require("./assets/fonts/ubuntu/Ubuntu-Bold.ttf"),
    ubuntuL: require("./assets/fonts/ubuntu/Ubuntu-Light.ttf"),
  });

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <Calculator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
