// HistoricoPalavras.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function HistoricoPalavras() {
  const historico = [
    { id: '1', palavra: 'Exemplo1' },
    { id: '2', palavra: 'Exemplo2' },
    { id: '3', palavra: 'Exemplo3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Palavras</Text>

      <FlatList
        data={historico}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.palavra}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9c2e7',
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#dfe4b7',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
  },
  itemText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
