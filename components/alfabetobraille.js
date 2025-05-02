import React, { useState } from 'react';
import {View, SafeAreaView, Text,TouchableOpacity,StyleSheet,FlatList,Dimensions,Modal,Pressable,} from 'react-native';
import alfBraille from './afalbraille'; 

const alfabeto = Object.entries(alfBraille)
  .filter(([letra]) => letra.length === 1 && letra.match(/[a-z]/i)) 
  .map(([letra, braille]) => ({
    letra: letra.toUpperCase(),
    braille
  }));

export default function AlfabetoBrailleAnimado() {
  const [selecionado, setSelecionado] = useState(null);

  const renderBraille = (braille) => {
    const bin = braille.toString(2).padStart(6, '0').split('').reverse();
    return (
      <View style={styles.cela}>
        {bin.map((bit, i) => (
          <View
            key={i}
            style={[
              styles.circle,
              bit === '1' ? styles.filled : null
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#a9c2e7' }}>
    <View style={styles.container}>
      <Text style={styles.headerText}>ALFABETO BRAIILE</Text>
      <FlatList
         key="3cols" 
         data={alfabeto}
         renderItem={({ item }) => (
         <TouchableOpacity
         style={styles.letra}
         onPress={() => setSelecionado(item)}
         >
        <Text style={styles.textoLetra}>{item.letra}</Text>
        </TouchableOpacity>
      )}
        keyExtractor={(item) => item.letra}
        numColumns={3}
        contentContainerStyle={styles.grid}
        />

   
      <Modal
        visible={!!selecionado}
        transparent
        animationType="fade"
        onRequestClose={() => setSelecionado(null)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setSelecionado(null)}>
          <View style={styles.modalCard}>
            <Text style={styles.modalLetra}>{selecionado?.letra}</Text>
            {selecionado && renderBraille(selecionado.braille)}
          </View>
        </Pressable>
      </Modal>
    </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9c2e7',
  },
  headerText: {
    backgroundColor: '#3f51b5',
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 3,
    backgroundColor:'#dfe4b7', 
    borderRadius:8,
    paddingVertical: 15
  },
  grid: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  letra: {
    backgroundColor: '#dfe4b7',
    width: Dimensions.get('window').width / 3.5,
    height: 100,
    borderRadius: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'black',
  },
  textoLetra: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    backgroundColor: '#dfe4b7',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    width: 220,
  },
  modalLetra: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cela: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 250,
    height: 300,
    justifyContent: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
    backgroundColor: '#fff',
  },
  filled: {
    backgroundColor: '#000',
  },
});
