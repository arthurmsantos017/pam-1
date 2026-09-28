import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {
    if (usuario === 'admin' && senha === '1234') {
      alert('Login realizado com sucesso!');
    } else {
      alert('Usuário ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Bem-vindo</Text>
      <Text style={styles.subtitulo}>Faça seu login</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={entrar}>
        <Text style={styles.textoBotao}>ENTRAR</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#ffffff',
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 35,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    backgroundColor: '#000000',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});