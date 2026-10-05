import React, { useState } from 'react';

import {
  View,
  Text,
  FlatList,
  Pressable,
  StyleSheet,
} from 'react-native';

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

export default function HomeScreen({ navigation }) {
  const [mensagem, setMensagem] = useState(
    'Escolha um personagem para ver os detalhes.'
  );

  function mostrarPontuacao() {
    const pontos = calcularPontos();
    setMensagem(`Pontuação total: ${pontos} pontos`);
  }

  return (
    <View style={styles.container}>

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

      <Pressable
        style={styles.botaoFuncoes}
        onPress={() => navigation.navigate('Funcoes')}
      >
        <Text style={styles.textoBotao}>
          VER FUNÇÕES
        </Text>
      </Pressable>

    </View>
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
    marginBottom: 10,
  },

  botaoFuncoes: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});