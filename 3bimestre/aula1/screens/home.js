import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Home() {
  const usuarios = [
    { id: '1', nome: 'João' },
    { id: '2', nome: 'Maria' },
    { id: '3', nome: 'Pedro' },
    { id: '4', nome: 'Ana' },
    { id: '5', nome: 'Carlos' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo!</Text>

      <Text style={styles.subtitulo}>Lista de usuários:</Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    marginBottom: 15,
  },

  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },

  nome: {
    fontSize: 18,
  },
});