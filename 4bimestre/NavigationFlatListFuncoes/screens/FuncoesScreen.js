import React, { useState } from 'react';

import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

const personagens = [
  { nome: 'Mario', pontos: 100 },
  { nome: 'Luigi', pontos: 90 },
  { nome: 'Peach', pontos: 85 },
  { nome: 'Yoshi', pontos: 80 },
  { nome: 'Toad', pontos: 70 },
  { nome: 'Bowser', pontos: 95 },
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

export default function FuncoesScreen() {
  const [resultado, setResultado] = useState(
    'Escolha uma função'
  );

  function executarCalculo() {
    const pontos = calcularPontos();

    setResultado(
      `Pontuação total: ${pontos} pontos`
    );
  }

  function executarContagem() {
    const quantidade = contarPersonagens();

    setResultado(
      `Quantidade de personagens: ${quantidade}`
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        ⚙️ FUNÇÕES DO APLICATIVO
      </Text>

      <Text style={styles.resultado}>
        {resultado}
      </Text>

      <Pressable
        style={styles.botao}
        onPress={executarCalculo}
      >
        <Text style={styles.textoBotao}>
          CALCULAR PONTOS
        </Text>
      </Pressable>

      <Pressable
        style={styles.botao}
        onPress={executarContagem}
      >
        <Text style={styles.textoBotao}>
          CONTAR PERSONAGENS
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#e52521',
    textAlign: 'center',
    marginBottom: 30,
  },

  resultado: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 20,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 25,
  },

  botao: {
    backgroundColor: '#e52521',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});