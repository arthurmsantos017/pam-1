
import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  Alert, StyleSheet, ScrollView
} from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function cadastrar() {
    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não são iguais.');
      return;
    }

    try {
      const usuario = await createUserWithEmailAndPassword(
        auth, email.trim(), senha
      );

      await setDoc(doc(db, 'usuarios', usuario.user.uid), {
        nome,
        email: email.trim()
      });

      Alert.alert('Sucesso', 'Conta criada!');
      navigation.replace('Home');

    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo}>BREAKING BAD</Text>
      <Text style={styles.subtitulo}>CRIE SUA CONTA</Text>

      <TextInput
        style={styles.input}
        placeholder="Seu nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
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

      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={cadastrar}>
        <Text style={styles.textoBotao}>CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já possui conta? Entrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  subtitulo: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 35,
    marginTop: 10
  },
  input: {
    backgroundColor: '#252D23',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15
  },
  botao: {
    backgroundColor: '#D5B83C',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center'
  },
  textoBotao: {
    color: '#111',
    fontWeight: 'bold'
  },
  link: {
    color: '#D5B83C',
    textAlign: 'center',
    marginTop: 25
  }
});
