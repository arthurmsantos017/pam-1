import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const personagens = [
  {
    id: '1',
    nome: 'Mario',
    emoji: '🍄',
    cor: '#e52521',
    descricao: 'O famoso herói do Reino dos Cogumelos.',
    pontos: 100,
  },
  {
    id: '2',
    nome: 'Luigi',
    emoji: '🟢',
    cor: '#43a047',
    descricao: 'Irmão do Mario e grande aventureiro.',
    pontos: 90,
  },
  {
    id: '3',
    nome: 'Peach',
    emoji: '👑',
    cor: '#f48fb1',
    descricao: 'Princesa do Reino dos Cogumelos.',
    pontos: 85,
  },
  {
    id: '4',
    nome: 'Yoshi',
    emoji: '🦖',
    cor: '#66bb6a',
    descricao: 'Dinossauro amigo do Mario.',
    pontos: 80,
  },
  {
    id: '5',
    nome: 'Toad',
    emoji: '🍄',
    cor: '#ff7043',
    descricao: 'Um dos moradores do Reino dos Cogumelos.',
    pontos: 70,
  },
  {
    id: '6',
    nome: 'Bowser',
    emoji: '🐢',
    cor: '#795548',
    descricao: 'O principal vilão da série.',
    pontos: 95,
  },
];

function calcularPontos() {
  return personagens.reduce(
    (total, personagem) => total + personagem.pontos,
    0
  );
}

function contarPersonagens() {
  return personagens.length;
}

function HomeScreen({ navigation }) {
  const [mensagem, setMensagem] = useState(
    'Escolha um personagem para ver os detalhes.'
  );

  function mostrarPontuacao() {
    const pontos = calcularPontos();
    setMensagem(`Pontuação total: ${pontos} pontos`);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.titulo}>
        🍄 SUPER MARIO
      </Text>

      <Text style={styles.subtitulo}>
        Personagens do Reino dos Cogumelos
      </Text>

      <Text style={styles.contador}>
        Total de personagens: {contarPersonagens()}
      </Text>

      <FlatList
        data={personagens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <Pressable
            style={[
              styles.card,
              { borderLeftColor: item.cor },
            ]}
            onPress={() =>
              navigation.navigate('Detalhes', {
                personagem: item,
              })
            }
          >
            <Text style={styles.emoji}>
              {item.emoji}
            </Text>

            <View style={styles.informacoes}>
              <Text style={styles.nome}>
                {item.nome}
              </Text>

              <Text style={styles.descricao}>
                {item.descricao}
              </Text>

              <Text style={styles.pontos}>
                ⭐ {item.pontos} pontos
              </Text>
            </View>
          </Pressable>
        )}
      />

      <Text style={styles.mensagem}>
        {mensagem}
      </Text>

      <Pressable
        style={styles.botao}
        onPress={mostrarPontuacao}
      >
        <Text style={styles.textoBotao}>
          CALCULAR PONTUAÇÃO
        </Text>
      </Pressable>
    </View>
  );
}

function DetalhesScreen({ route, navigation }) {
  const { personagem } = route.params;

  return (
    <View style={styles.detalhesContainer}>
      <Text style={styles.detalhesEmoji}>
        {personagem.emoji}
      </Text>

      <Text
        style={[
          styles.detalhesNome,
          { color: personagem.cor },
        ]}
      >
        {personagem.nome}
      </Text>

      <Text style={styles.detalhesDescricao}>
        {personagem.descricao}
      </Text>

      <View style={styles.pontuacaoCard}>
        <Text style={styles.pontuacaoTitulo}>
          ⭐ Pontuação
        </Text>

        <Text style={styles.pontuacaoNumero}>
          {personagem.pontos}
        </Text>
      </View>

      <Pressable
        style={styles.botao}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textoBotao}>
          VOLTAR
        </Text>
      </Pressable>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e52521',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            title: 'Super Mario',
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{
            title: 'Detalhes do personagem',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#e52521',
    textAlign: 'center',
    marginTop: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },

  contador: {
    fontSize: 15,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },

  lista: {
    paddingBottom: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  emoji: {
    fontSize: 45,
    marginRight: 15,
  },

  informacoes: {
    flex: 1,
  },

  nome: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#e52521',
  },

  descricao: {
    color: '#555',
    marginTop: 4,
  },

  pontos: {
    marginTop: 5,
    fontWeight: 'bold',
  },

  mensagem: {
    textAlign: 'center',
    color: '#555',
    marginVertical: 8,
  },

  botao: {
    backgroundColor: '#e52521',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  detalhesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f5f5f5',
  },

  detalhesEmoji: {
    fontSize: 100,
    marginBottom: 15,
  },

  detalhesNome: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  detalhesDescricao: {
    fontSize: 17,
    textAlign: 'center',
    color: '#555',
    marginBottom: 25,
  },

  pontuacaoCard: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  pontuacaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  pontuacaoNumero: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#e52521',
    marginTop: 5,
  },
});