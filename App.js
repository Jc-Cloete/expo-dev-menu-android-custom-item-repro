import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Platform } from "react-native";
import { registerDevMenuItems } from "expo-dev-menu";

if (__DEV__ && Platform.OS !== "web") {
  registerDevMenuItems([
    {
      name: "Reset App State",
      shouldCollapse: false,
      callback: () => console.log("Resetting…"),
    },
  ])
    .then(() => console.log("Dev Menu item registered"))
    .catch((error) => console.warn("Failed to register Dev Menu item", error));
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
