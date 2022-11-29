import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

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
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
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
  }
});
