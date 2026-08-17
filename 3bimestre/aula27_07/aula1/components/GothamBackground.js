import { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

function Estrela({ top, left, delay, size }) {
  const opacidade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacidade, { toValue: 1, duration: 1500, delay, useNativeDriver: true }),
        Animated.timing(opacidade, { toValue: 0.2, duration: 1500, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top,
        left,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: '#fff',
        opacity: opacidade,
      }}
    />
  );
}

export default function GothamBackground() {
  const anguloHolofote = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anguloHolofote, {
          toValue: 1,
          duration: 3500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(anguloHolofote, {
          toValue: 0,
          duration: 3500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const rotacao = anguloHolofote.interpolate({
    inputRange: [0, 1],
    outputRange: ['-22deg', '22deg'],
  });

  const estrelas = Array.from({ length: 18 }).map((_, i) => ({
    id: i,
    top: Math.random() * 380,
    left: Math.random() * 340,
    delay: Math.random() * 2000,
    size: Math.random() * 2 + 1,
  }));

  return (
    <View style={styles.fundo} pointerEvents="none">
      {estrelas.map((e) => (
        <Estrela key={e.id} top={e.top} left={e.left} delay={e.delay} size={e.size} />
      ))}

      <Animated.View style={[styles.holofoteWrap, { transform: [{ rotate: rotacao }] }]}>
        <View style={styles.feixe} />
      </Animated.View>

      <View style={styles.skyline}>
        {[40, 70, 30, 90, 50, 110, 35, 80, 45].map((altura, i) => (
          <View key={i} style={[styles.predio, { height: altura }]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#050505',
    overflow: 'hidden',
  },
  holofoteWrap: {
    position: 'absolute',
    top: -80,
    left: '50%',
    marginLeft: -60,
  },
  feixe: {
    width: 120,
    height: 500,
    backgroundColor: '#FFD70022',
    borderRadius: 60,
  },
  skyline: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'space-evenly',
    opacity: 0.9,
  },
  predio: {
    width: 30,
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderColor: '#FFD70033',
  },
});