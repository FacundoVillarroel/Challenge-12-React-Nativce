import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';

import AppNavigator from "./navigation/index"

export default function App() {
  const [loaded] = useFonts({
    "Anek-Light" : require("../assets/fonts/AnekDevanagari-Light.ttf"),
    "Anek-Regular" : require("../assets/fonts/AnekDevanagari-Regular.ttf"),
    "Anek-SemiBold" : require("../assets/fonts/AnekDevanagari-SemiBold.ttf"),
    "Anek-Bold" : require("../assets/fonts/AnekDevanagari-Bold.ttf"),
  })

  if (!loaded) {
    return (
      <View styles={styles.container}>
        <ActivityIndicator color="#DAC4F7" size="large" />
      </View>
    );
  }

  return (
      <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
