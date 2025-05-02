import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';
import alfBraille from './afalbraille';

export default function BrailleConverte() {
  const [plvr, setPlvr] = useState('');

  const plvrBraille = plvr.trim().toLowerCase().split('');

  const screenWidth = Dimensions.get('window').width;
  const numColumns = 7; // Quantas celas por linha você quer em média
  const spacing = 20; // Espaçamento entre celas

  // Largura mínima das celas (ajustada para garantir boa visibilidade)
  const minCellWidth = 80;  // Ajuste para 80px como largura mínima (ainda mais visível)
  // Largura máxima das celas
  const maxCellWidth = 120;

  // Calculando a largura da cela, com valores mínimo e máximo
  const cellWidth = Math.max(Math.min((screenWidth - (spacing * (numColumns + 1))) / numColumns, maxCellWidth), minCellWidth);
  const circleSize = cellWidth / 3;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite uma palavra:</Text>

      <TextInput
        style={styles.input}
        value={plvr}
        onChangeText={setPlvr}
        placeholder="Digite aqui"
      />

      <View style={[styles.brailleContainer, { gap: spacing }]}>
        {plvrBraille.map((plvB, index) => {
          if (plvB === ' ') {
            return <View key={index} style={{ width: cellWidth }} />;
          }

          const brailleValue = alfBraille[plvB] || 0;

          const points = [
            (brailleValue & 1) !== 0,
            (brailleValue & 2) !== 0,
            (brailleValue & 4) !== 0,
            (brailleValue & 8) !== 0,
            (brailleValue & 16) !== 0,
            (brailleValue & 32) !== 0,
          ];

          return (
            <View key={index} style={[styles.cela, { width: cellWidth }]}>
              <View style={styles.row}>
                <View style={[styles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize/2 }, points[0] && styles.filled]} />
                <View style={[styles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize/2 }, points[1] && styles.filled]} />
              </View>
              <View style={styles.row}>
                <View style={[styles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize/2 }, points[2] && styles.filled]} />
                <View style={[styles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize/2 }, points[3] && styles.filled]} />
              </View>
              <View style={styles.row}>
                <View style={[styles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize/2 }, points[4] && styles.filled]} />
                <View style={[styles.circle, { width: circleSize, height: circleSize, borderRadius: circleSize/2 }, points[5] && styles.filled]} />
              </View>
              <Text style={styles.plvLabel}>{plvB}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  brailleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  cela: {
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  circle: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 2,
  },
  filled: {
    backgroundColor: '#000',
  },
  plvLabel: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
})