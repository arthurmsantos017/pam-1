import { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import GothamBackground from '../components/GothamBackground';

export default function Inicial({ navigation }) {
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.3)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const fadeTitulo = useRef(new Animated.Value(0)).current;
  const fadeSub = useRef(new Animated.Value(0)).current;
  const fadeBotao = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(1)).current;
  const pressScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeLogo, { toValue: 1, duration: 900, useNativeDriver: true }),
        Animated.spring(scaleLogo, { toValue: 1, friction: 4, useNativeDriver: true }),
        Animated.timing(rotateLogo, {
          toValue: 1,
          duration: 900,
          easing: Easing.out(Easing.back(1.5)),
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(fadeTitulo, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(fadeSub, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.timing(fadeBotao, { toValue: 1, duration: 500, useNativeDriver: true }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 1.08, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 1000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  const giro = rotateLogo.interpolate({ inputRange: [0, 1], outputRange: ['-180deg', '0deg'] });

  function pressIn() {
    Animated.spring(pressScale, { toValue: 0.93, useNativeDriver: true }).start();
  }
  function pressOut() {
    Animated.spring(pressScale, { toValue: 1, friction: 3, useNativeDriver: true }).start();
  }

  return (
    <View style={styles.container}>
      <GothamBackground />

      <Animated.View
        style={{
          opacity: fadeLogo,
          transform: [{ scale: scaleLogo }, { rotate: giro }],
        }}
      >
        <View style={styles.circuloLogo}>
          <Text style={styles.emojiLogo}>🦇</Text>
        </View>
      </Animated.View>

      <Animated.Text style={[styles.titulo, { opacity: fadeTitulo }]}>BATMAN</Animated.Text>

      <Animated.Text style={[styles.subtitulo, { opacity: fadeSub }]}>
        Bem-vindo a Gotham City
      </Animated.Text>

      <Animated.View style={{ opacity: fadeBotao, transform: [{ scale: pulse }] }}>
        <Animated.View style={{ transform: [{ scale: pressScale }] }}>
          <TouchableOpacity
            style={styles.botao}
            activeOpacity={1}
            onPressIn={pressIn}
            onPressOut={pressOut}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.textoBotao}>ENTRAR</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  circuloLogo: {
    width: 170,
    height: 170,
    borderRadius: 85,
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
    marginBottom: 25,
  },
  emojiLogo: {
    fontSize: 80,
  },
  titulo: {
    color: '#FFD700',
    fontSize: 46,
    fontWeight: 'bold',
    letterSpacing: 8,
  },
  subtitulo: {
    color: '#bbb',
    fontSize: 16,
    marginBottom: 50,
    fontStyle: 'italic',
  },
  botao: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 45,
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
    fontSize: 16,
    letterSpacing: 2,
  },
});