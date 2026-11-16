
import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Alert
} from 'react-native';

import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase';

export default function Perfil({ navigation }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function carregarPerfil() {
      try {
        const uid = auth.currentUser.uid;
        const resultado = await getDoc(doc(db, 'usuarios', uid));

        if (resultado.exists()) {
          setUsuario(resultado.data());
        }
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar o perfil.');
      }
    }

    carregarPerfil();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MEU PERFIL</Text>

      <Text style={styles.label}>Nome</Text>
      <Text style={styles.valor}>{usuario?.nome || 'Carregando...'}</Text>

      <Text style={styles.label}>E-mail</Text>
      <Text style={styles.valor}>{usuario?.email || 'Carregando...'}</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Editar')}
      >
        <Text style={styles.texto}>EDITAR PERFIL</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltar}>Voltar</Text>
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 35
  },
  label: {
    color: '#D5B83C',
    marginTop: 15
  },
  valor: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8
  },
  botao: {
    backgroundColor: '#D5B83C',
    padding: 15,
    marginTop: 35,
    borderRadius: 8,
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
