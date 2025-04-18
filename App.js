import React, { useState } from 'react';
import { View, TextInput, Text, ScrollView } from 'react-native';
import styles from './components/style';
import alfBraille from './components/afalbraille'

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


