import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Teste de tela!</Text>
      </View>
      <View Style={styles.cont_texto}>
        <Text>

        </Text>
        </View>
        <View>
        </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margintop:50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont_texto: {
    height: 500,
    backgroundColor: "red",

  },
});
