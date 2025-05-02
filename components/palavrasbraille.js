// PalavrasBraille.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PalavrasBraille({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PALAVRAS EM BRAILLE</Text>

      <TouchableOpacity style={styles.button} onPress={() => {/* ação para digitar palavra */}}>
        <Text style={styles.buttonText}>
          DIGITE A{"\n"}PALAVRA{"\n"}DESEJADA{"\n"}PARA{"\n"}TRADUZIR
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {/* ação para histórico */}}>
        <Text style={styles.buttonText}>
          HISTÓRICO{"\n"}DE{"\n"}PALAVRAS
        </Text>
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
    backgroundColor: '#4a4aa3', // cor da barra roxa
    width: '100%',
    textAlign: 'center',
    paddingVertical: 15,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#dfe4b7',
    borderRadius: 100,
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
