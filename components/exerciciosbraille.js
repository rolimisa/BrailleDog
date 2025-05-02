import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ExerciciosBraille = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>EXERCÍCIOS</Text>

      <TouchableOpacity style={styles.exerciseButton}>
        <Text style={styles.exerciseText}>EXERCÍCIOS DE LEITURA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Azul claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#5D6D7E', // Azul mais escuro
    width: '100%',
    padding: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  exerciseButton: {
    marginTop: 100,
    backgroundColor: '#DDE2B6', // Verde claro
    borderRadius: 50,
    padding: 20,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  exerciseText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default ExerciciosBraille;
