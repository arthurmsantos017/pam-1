
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  Alert, StyleSheet
} from 'react-native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function fazerLogin() {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), senha);
      navigation.replace('Home');

    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'E-mail ou senha incorretos.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BREAKING BAD</Text>
      <Text style={styles.subtitulo}>WELCOME TO THE EMPIRE</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
        <Text style={styles.textoBotao}>ENTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
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
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitulo: {
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 45,
    marginTop: 10
  },
  input: {
    backgroundColor: '#252D23',
    color: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 18
  },
  botao: {
    backgroundColor: '#D5B83C',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center'
  },
  textoBotao: {
    fontWeight: 'bold',
    color: '#111'
  },
  link: {
    color: '#D5B83C',
    textAlign: 'center',
    marginTop: 25
  }
});
