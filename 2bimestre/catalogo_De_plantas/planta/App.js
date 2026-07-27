import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function App() {
  return (

    <ScrollView style={styles.fundo}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#20bb42',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
