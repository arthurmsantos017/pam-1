import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {

  const jogos = [
    {
      id: '1',
      nome: 'Fortnite',
      genero: 'Battle Royale',
      plataforma: 'PC / PlayStation / Xbox'
    },
    {
      id: '2',
      nome: 'Minecraft',
      genero: 'Sobrevivência',
      plataforma: 'PC / PlayStation / Xbox'
    },
    {
      id: '3',
      nome: 'GTA V',
      genero: 'Ação e Aventura',
      plataforma: 'PC / PlayStation / Xbox'
    },
    {
      id: '4',
      nome: 'Valorant',
      genero: 'FPS',
      plataforma: 'PC'
    },
    {
      id: '5',
      nome: 'Rocket League',
      genero: 'Esporte',
      plataforma: 'PC / PlayStation / Xbox'
    },
    {
      id: '6',
      nome: 'EA FC 26',
      genero: 'Futebol',
      plataforma: 'PC / PlayStation / Xbox'
    },
  ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>🎮 Catálogo de Jogos</Text>

      <Text style={styles.subtitulo}>
        Confira alguns jogos populares:
      </Text>

      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}

        renderItem={({ item }) => (
          <View style={styles.item}>

            <Text style={styles.nome}>
              🎮 {item.nome}
            </Text>

            <Text style={styles.info}>
              Gênero: {item.genero}
            </Text>

            <Text style={styles.info}>
              Plataforma: {item.plataforma}
            </Text>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    paddingTop: 60,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#555',
  },

  item: {
    backgroundColor: '#ffffff',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  nome: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  info: {
    fontSize: 16,
    marginTop: 3,
    color: '#555',
  },

});