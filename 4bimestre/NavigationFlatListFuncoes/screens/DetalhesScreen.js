import React from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

export default function DetalhesScreen({ route, navigation }) {
  const { personagem } = route.params;

  return (
    <View style={styles.container}>

      <Text style={styles.emoji}>
        {personagem.emoji}
      </Text>

      <Text
        style={[
          styles.nome,
          { color: personagem.cor },
        ]}
      >
        {personagem.nome}
      </Text>

      <Text style={styles.descricao}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f5f5f5',
  },

  emoji: {
    fontSize: 100,
    marginBottom: 15,
  },

  nome: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  descricao: {
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

  botao: {
    backgroundColor: '#e52521',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});