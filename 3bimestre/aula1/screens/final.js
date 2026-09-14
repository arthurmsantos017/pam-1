import { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import GothamBackground from '../components/GothamBackground';

export default function Final({ navigation }) {
  const fade = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.5)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const fadeTexto = useRef(new Animated.Value(0)).current;
  const fadeBotao = useRef(new Animated.Value(0)).current;
  const pressScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fade, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.spring(scale, { toValue: 1, friction: 4, useNativeDriver: true }),
        Animated.timing(rotate, {
          toValue: 1,
          duration: 800,
          easing: Easing.out(Easing.back(1.8)),
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(fadeTexto, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(fadeBotao, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();
  }, []);

  const giro = rotate.interpolate({ inputRange: [0, 1], outputRange: ['360deg', '0deg'] });

  function pressIn() {
    Animated.spring(pressScale, { toValue: 0.93, useNativeDriver: true }).start();
  }
  function pressOut() {
    Animated.spring(pressScale, { toValue: 1, friction: 3, useNativeDriver: true }).start();
  }

  return (
    <View style={styles.container}>
      <GothamBackground />

      <Animated.View style={{ opacity: fade, transform: [{ scale }, { rotate: giro }] }}>
        <View style={styles.circuloLogo}>
          <Text style={styles.emojiLogo}>🦇</Text>
        </View>
      </Animated.View>

      <Animated.Text style={[styles.titulo, { opacity: fadeTexto }]}>
        BEM-VINDO À GOTHAM
      </Animated.Text>

      <Animated.Text style={[styles.texto, { opacity: fadeTexto }]}>
        O Batman está pronto para proteger a cidade.
      </Animated.Text>

      <Animated.View style={{ opacity: fadeBotao, transform: [{ scale: pressScale }] }}>
        <TouchableOpacity
          style={styles.botao}
          activeOpacity={1}
          onPressIn={pressIn}
          onPressOut={pressOut}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoBotao}>VOLTAR AO LOGIN</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  circuloLogo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFD700',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 20,
    marginBottom: 20,
  },
  emojiLogo: {
    fontSize: 70,
  },
  titulo: {
    color: '#FFD700',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: 2,
  },
  texto: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 35,
    fontStyle: 'italic',
  },
  botao: {
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 30,
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 10,
  },
  textoBotao: {
    color: '#050505',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 1,
  },
});