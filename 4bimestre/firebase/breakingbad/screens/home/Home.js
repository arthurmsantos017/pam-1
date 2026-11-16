
import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  Image, StyleSheet
} from 'react-native';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const personagens = [
  {
    nome: 'Walter White',
    descricao: 'Professor de química e Heisenberg.',
    imagem: 'https://static.wikia.nocookie.net/breakingbad/images/8/8a/Walter_White_S5B.png'
  },
  {
    nome: 'Jesse Pinkman',
    descricao: 'Parceiro de Walter White.',
    imagem: 'https://static.wikia.nocookie.net/breakingbad/images/c/c6/Jesse_Pinkman_S5B.png'
  },
  {
    nome: 'Saul Goodman',
    descricao: 'Advogado de Albuquerque.',
    imagem: 'https://static.wikia.nocookie.net/breakingbad/images/0/01/Saul_Goodman_BCS_S6.png'
  },
  {
    nome: 'Gustavo Fring',
    descricao: 'Empresário e antagonista da série.',
    imagem: 'https://static.wikia.nocookie.net/breakingbad/images/6/69/Gustavo_Fring.jpg'
  }
];

export default function Home({ navigation }) {
  async function sair() {
    await signOut(auth);
    navigation.replace('Login');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.logo}>BREAKING BAD</Text>
        <Text style={styles.subtitulo}>THE WORLD OF HEISENBERG</Text>
      </View>

      <Text style={styles.titulo}>Personagens</Text>

      {personagens.map((item, index) => (
        <View style={styles.card} key={index}>
          <Image source={{ uri: item.imagem }} style={styles.imagem} />
          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        </View>
      ))}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={styles.botaoTexto}>MEU PERFIL</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Text style={styles.botaoTexto}>SOBRE O APP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sair} onPress={sair}>
        <Text style={styles.botaoTexto}>SAIR DA CONTA</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101510',
    padding: 20
  },
  topo: {
    backgroundColor: '#252D23',
    padding: 25,
    borderRadius: 12,
    marginTop: 30
  },
  logo: {
    color: '#D5B83C',
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitulo: {
    color: '#fff',
    fontSize: 11,
    marginTop: 8
  },
  titulo: {
    color: '#D5B83C',
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 25
  },
  card: {
    backgroundColor: '#252D23',
    borderRadius: 10,
    marginBottom: 15,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagem: {
    width: 90,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#444'
  },
  info: {
    flex: 1,
    padding: 12
  },
  nome: {
    color: '#D5B83C',
    fontSize: 17,
    fontWeight: 'bold'
  },
  descricao: {
    color: '#ddd',
    marginTop: 8
  },
  botao: {
    backgroundColor: '#D5B83C',
    padding: 15,
    marginTop: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  sair: {
    backgroundColor: '#713B30',
    padding: 15,
    marginTop: 12,
    marginBottom: 30,
    borderRadius: 8,
    alignItems: 'center'
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
