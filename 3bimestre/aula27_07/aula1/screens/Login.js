import { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import GothamBackground from '../components/GothamBackground';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [focoUsuario, setFocoUsuario] = useState(false);
  const [focoSenha, setFocoSenha] = useState(false);

  const fadeCard = useRef(new Animated.Value(0)).current;
  const slideCard = useRef(new Animated.Value(40)).current;
  const shake = useRef(new Animated.Value(0)).current;
  const pressScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeCard, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.spring(slideCard, { toValue: 0, friction: 6, useNativeDriver: true }),
    ]).start();
  }, []);

  function dispararErro() {
    Animated.sequence([
      Animated.timing(shake, { toValue: 10, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: -10, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 8, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: -8, duration: 60, useNativeDriver: true }),
      Animated.timing(shake, { toValue: 0, duration: 60, useNativeDriver: true }),
    ]).start();
  }

  function handleEntrar() {
    if (senha === 'Batman123') {
      navigation.navigate('Final');
    } else {
      dispararErro();
    }
  }

  function pressIn() {
    Animated.spring(pressScale, { toValue: 0.95, useNativeDriver: true }).start();
  }
  function pressOut() {
    Animated.spring(pressScale, { toValue: 1, friction: 3, useNativeDriver: true }).start();
  }

  return (
    <View style={styles.container}>
      <GothamBackground />

      <Animated.View
        style={[
          styles.card,
          { opacity: fadeCard, transform: [{ translateY: slideCard }, { translateX: shake }] },
        ]}
      >
        <View style={styles.circuloLogo}>
          <Text style={styles.emojiLogo}>🦇</Text>
        </View>

        <Text style={styles.titulo}>LOGIN DO BATMAN</Text>

        <TextInput
          style={[styles.input, focoUsuario && styles.inputFoco]}
          placeholder="Usuário"
          placeholderTextColor="#777"
          value={usuario}
          onChangeText={setUsuario}
          onFocus={() => setFocoUsuario(true)}
          onBlur={() => setFocoUsuario(false)}
        />

        <TextInput
          style={[styles.input, focoSenha && styles.inputFoco]}
          placeholder="Senha"
          placeholderTextColor="#777"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          onFocus={() => setFocoSenha(true)}
          onBlur={() => setFocoSenha(false)}
        />

        <Animated.View style={{ transform: [{ scale: pressScale }] }}>
          <TouchableOpacity
            style={styles.botao}
            activeOpacity={1}
            onPressIn={pressIn}
            onPressOut={pressOut}
            onPress={handleEntrar}
          >
            <Text style={styles.textoBotao}>ENTRAR NA BATCAVERNA</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    justifyContent: 'center',
    padding: 26,
  },
  card: {
    backgroundColor: '#0a0a0acc',
    borderRadius: 24,
    padding: 26,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFD70033',
  },
  circuloLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 20,
    elevation: 15,
    marginBottom: 15,
  },
  emojiLogo: {
    fontSize: 46,
  },
  titulo: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 28,
    letterSpacing: 2,
  },
  input: {
    width: '100%',
    backgroundColor: '#111',
    color: '#fff',
    height: 52,
    marginBottom: 16,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFD70033',
  },
  inputFoco: {
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  botao: {
    width: '100%',
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
  },
  textoBotao: {
    color: '#050505',
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
});