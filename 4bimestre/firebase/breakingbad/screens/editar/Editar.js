
import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Alert
} from 'react-native';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';

export default function Editar({ navigation }) {
  const [nome, setNome] = useState('');

  useEffect(() => {
    async function carregar() {
      const uid = auth.currentUser.uid;
      const resultado = await getDoc(doc(db, 'usuarios', uid));

      if (resultado.exists()) {
        setNome(resultado.data().nome || '');
      }
    }

    carregar();
  }, []);

  async function salvar() {
    if (!nome.trim()) {
      Alert.alert('Atenção', 'Digite seu nome.');
      return;
    }

    try {
      const uid = auth.currentUser.uid;

      await updateDoc(doc(db, 'usuarios', uid), {
        nome: nome.trim()
      });

      Alert.alert('Sucesso', 'Perfil atualizado!');
      navigation.goBack();

    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EDITAR PERFIL</Text>

      <Text style={styles.label}>Novo nome</Text>

      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.texto}>SALVAR ALTERAÇÕES</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltar}>Cancelar</Text>
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
  titulo: {
    color: '#D5B83C',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 35
  },
  label: {
    color: '#fff',
    marginBottom: 10
  },
  input: {
    backgroundColor: '#252D23',
    color: '#fff',
    padding: 16,
    borderRadius: 8
  },
  botao: {
    backgroundColor: '#D5B83C',
    padding: 16,
    borderRadius: 8,
    marginTop: 25,
    alignItems: 'center'
  },
  texto: {
    color: '#111',
    fontWeight: 'bold'
  },
  voltar: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 25
  }
});
