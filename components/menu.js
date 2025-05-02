import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, Animated } from 'react-native';

export default function MenuScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);

  // Animação do fundo
  const animatedValue = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isEnabled ? 1 : 0,
      duration: 500, // duração da animação em ms
      useNativeDriver: false, // para animar cores precisa ser false
    }).start();
  }, [isEnabled]);

  // Interpolar as cores baseado no animatedValue
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#a9c2e7', '#333'], // azul claro → cinza escuro
  });

  const buttonColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#dfe3b7', '#666'], // verde claro → cinza médio
  });

  const textColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#000', '#fff'], // preto → branco
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Animated.Text style={[styles.title, { color: textColor }]}>MENU</Animated.Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Alfabeto')}>
          <Animated.Text style={[styles.buttonText, { color: textColor }]}>ALFABETO{'\n'}EM{'\n'}BRAILLE</Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Numeros')}>
          <Animated.Text style={[styles.buttonText, { color: textColor }]}>NÚMEROS{'\n'}EM{'\n'}BRAILLE</Animated.Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Palavras')}>
          <Animated.Text style={[styles.buttonText, { color: textColor }]}>PALAVRAS{'\n'}EM{'\n'}BRAILLE</Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Exercicios')}>
          <Animated.Text style={[styles.buttonText, { color: textColor }]}>EXERCÍCIOS</Animated.Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Configuracoes')}>
          <Animated.Text style={[styles.buttonText, { color: textColor }]}>CONFIGURAÇÕES</Animated.Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={() => navigation.navigate('Sobre')}>
          <Animated.Text style={[styles.buttonText, { color: textColor }]}>SOBRE</Animated.Text>
        </TouchableOpacity>
      </View>

      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    borderRadius: 75,
    width: 120,
    height: 120,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Comic Sans MS',
  },
  switchContainer: {
    marginTop: 30,
  },
});
