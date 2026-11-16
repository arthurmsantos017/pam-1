
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BREAKING BAD</Text>

      <Text style={styles.titulo}>Sobre o aplicativo</Text>

      <Text style={styles.texto}>
        Este aplicativo foi desenvolvido como projeto acadêmico,
        utilizando React Native, Expo e Firebase.
      </Text>

      <Text style={styles.texto}>
        O objetivo é apresentar informações sobre a série
        Breaking Bad, seus personagens e seu universo.
      </Text>

      <Text style={styles.creditos}>
        Desenvolvido para a atividade de PAM.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.botaoTexto}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101510',
    justifyContent: 'center',
    padding: 25
  },
  logo: {
    color: '#D5B83C',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titulo: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20
  },
  texto: {
    color: '#ddd',
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 15
  },
  creditos: {
    color: '#D5B83C',
    marginTop: 20
  },
  botao: {
    backgroundColor: '#D5B83C',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center'
  },
  botaoTexto: {
    color: '#111',
    fontWeight: 'bold'
  }
});
