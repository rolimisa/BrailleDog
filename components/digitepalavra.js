// DigitarPalavra.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function DigitarPalavra({ navigation }) {
  const [palavra, setPalavra] = useState('');

  const traduzirPalavra = () => {
    console.log('Palavra digitada:', palavra);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite a palavra</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        value={palavra}
        onChangeText={setPalavra}
      />

      <TouchableOpacity style={styles.button} onPress={traduzirPalavra}>
        <Text style={styles.buttonText}>Traduzir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9c2e7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#dfe4b7',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
