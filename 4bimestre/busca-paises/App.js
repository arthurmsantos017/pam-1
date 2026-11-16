
import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from 'react-native';

const API_URL = 'https://countries.dev';

export default function App() {
  const [country, setCountry] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function normalizar(texto) {
    return texto
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  async function searchCountry() {
    if (!country.trim()) {
      setError('Digite o nome de um país!');
      setData(null);
      return;
    }

    setLoading(true);
    setError('');
    setData(null);

    try {
      const aliases = {
        brasil: 'Brazil',
        japao: 'Japan',
        franca: 'France',
        alemanha: 'Germany',
        italia: 'Italy',
        espanha: 'Spain',
        'estados unidos': 'United States',
        'reino unido': 'United Kingdom',
        'coreia do sul': 'South Korea',
        'arabia saudita': 'Saudi Arabia'
      };

      const nomeBusca = normalizar(country);
      const nomeApi = aliases[nomeBusca] || country.trim();

      const response = await fetch(
        `${API_URL}/name/${encodeURIComponent(nomeApi)}`
      );

      if (response.status === 404) {
        throw new Error('País não encontrado!');
      }

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const result = await response.json();

      if (!Array.isArray(result) || result.length === 0) {
        throw new Error('Nenhum país encontrado!');
      }

      const paisEncontrado = result.find(
        pais => normalizar(pais.name) === normalizar(nomeApi)
      ) || result[0];

      setData(paisEncontrado);

    } catch (err) {
      console.error('Erro ao pesquisar país:', err);

      setError(
        err.message === 'Failed to fetch'
          ? 'Não foi possível conectar à API. Verifique sua internet e tente novamente.'
          : err.message
      );

    } finally {
      setLoading(false);
    }
  }

  const languages = data?.languages
    ? data.languages.map(item => item.name).join(', ')
    : 'Não informado';

  const currencies = data?.currencies
    ? data.currencies.map(item => item.name).join(', ')
    : 'Não informado';

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>🌎 World Explorer</Text>

        <Text style={styles.subtitle}>
          Descubra o mundo através de uma pesquisa!
        </Text>
      </View>

      <View style={styles.content}>

        <Text style={styles.heading}>
          Pesquisar país
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Brasil, Japão, França..."
          placeholderTextColor="#888"
          value={country}
          onChangeText={setCountry}
          onSubmitEditing={searchCountry}
          editable={!loading}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={searchCountry}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Pesquisando...' : '🔍 Pesquisar'}
          </Text>
        </TouchableOpacity>

        {loading && (
          <ActivityIndicator
            size="large"
            color="#2563eb"
            style={{ marginTop: 25 }}
          />
        )}

        {error !== '' && (
          <Text style={styles.error}>
            {error}
          </Text>
        )}

        {data && (
          <View style={styles.card}>

            <Image
              source={{ uri: data.flags?.png }}
              style={styles.flag}
              resizeMode="contain"
            />

            <Text style={styles.countryName}>
              {data.name}
            </Text>

            <Text style={styles.official}>
              {data.nativeName || data.name}
            </Text>

            <View style={styles.divider} />

            <Info
              title="🏙️ Capital"
              value={data.capital || 'Não informada'}
            />

            <Info
              title="🌍 Continente"
              value={data.region || 'Não informado'}
            />

            <Info
              title="📍 Sub-região"
              value={data.subregion || 'Não informada'}
            />

            <Info
              title="👥 População"
              value={(data.population || 0).toLocaleString('pt-BR')}
            />

            <Info
              title="🗣️ Idiomas"
              value={languages}
            />

            <Info
              title="💰 Moeda"
              value={currencies}
            />

            <Info
              title="📐 Área territorial"
              value={`${(data.area || 0).toLocaleString('pt-BR')} km²`}
            />

            <Info
              title="🏳️ Bandeira"
              value={data.flag || 'Não informada'}
            />

            <Info
              title="🔤 Código do país"
              value={data.alpha2Code || 'Não informado'}
            />

          </View>
        )}

      </View>

      <Text style={styles.footer}>
        World Explorer © 2026
      </Text>

    </ScrollView>
  );
}

function Info({ title, value }) {
  return (
    <View style={styles.info}>
      <Text style={styles.infoTitle}>
        {title}
      </Text>

      <Text style={styles.infoValue}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
  },

  header: {
    backgroundColor: '#142d4e',
    paddingTop: 65,
    paddingBottom: 35,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#dbeafe',
    marginTop: 10,
    textAlign: 'center',
  },

  content: {
    padding: 20,
  },

  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#142d4e',
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 12,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  error: {
    color: '#dc2626',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginTop: 25,
    elevation: 3,
  },

  flag: {
    width: '100%',
    height: 150,
    marginBottom: 15,
  },

  countryName: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#142d4e',
    textAlign: 'center',
  },

  official: {
    textAlign: 'center',
    color: '#777',
    marginTop: 5,
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },

  info: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  infoTitle: {
    fontWeight: 'bold',
    color: '#2563eb',
    fontSize: 15,
  },

  infoValue: {
    color: '#333',
    fontSize: 15,
    marginTop: 5,
  },

  footer: {
    textAlign: 'center',
    color: '#888',
    padding: 20,
  },

});
