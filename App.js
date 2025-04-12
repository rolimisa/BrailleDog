import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView } from 'react-native';
import styles from './components/style';

const alfBraille = {
  a: 1, b: 5, c: 3, d: 11, e: 9, f: 7, g: 15, h: 13, i: 6, j: 14,
  k: 17, l: 21, m: 19, n: 27, o: 25, p: 23, q: 31, r: 29, s: 22, t: 30,
  u: 49, v: 53, w: 46, x: 51, y: 59, z: 57
};

export default function BrailleConverte() {
  const [plvr, setPlvr] = useState('');

  const plvrBraille = plvr.trim().toLowerCase().split('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Digite uma palavra:</Text>

      <TextInput
        style={styles.input}
        value={plvr}
        onChangeText={setPlvr}
        placeholder="Digite aqui"
      />

      <ScrollView horizontal style={styles.brailleContainer}>
        {plvrBraille.map((plvB, index) => {
          const brailleValue = alfBraille[plvB] || 0;
          const binary = brailleValue.toString(2).padStart(6, '0').split('').reverse();

          return (
            <View key={index} style={styles.cela}>
              {binary.map((bit, i) => (
                <View
                  key={i}
                  style={[styles.circle, bit === '1' && styles.filled]}
                />
              ))}
              <Text style={styles.plvLabel}>{plvB}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}


