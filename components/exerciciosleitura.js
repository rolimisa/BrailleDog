import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import Exerciciosdeleitura from "../components/Exerciciosdeleitura";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";
import MaterialButtonViolet3 from "../components/MaterialButtonViolet3";

function Exerciciosleitura(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      <Exerciciosdeleitura
        style={styles.cupertinoHeaderWithBackground5}
      ></Exerciciosdeleitura>
      <View style={styles.materialButtonViolet4Row}>
        <MaterialButtonViolet
          style={styles.materialButtonViolet4}
        ></MaterialButtonViolet>
        <MaterialButtonViolet
          style={styles.materialButtonViolet5}
        ></MaterialButtonViolet>
      </View>
      <Text style={styles.palavraDaImagem}>PALAVRA DA IMAGEM</Text>
      <Text style={styles.palavraBraille}>PALAVRA BRAILLE</Text>
      <MaterialButtonViolet1
        style={styles.materialButtonViolet1}
      ></MaterialButtonViolet1>
      <MaterialButtonViolet3
        style={styles.materialButtonViolet3}
      ></MaterialButtonViolet3>
      <View style={styles.materialButtonViolet7Row}>
        <MaterialButtonViolet
          style={styles.materialButtonViolet7}
        ></MaterialButtonViolet>
        <MaterialButtonViolet
          style={styles.materialButtonViolet6}
        ></MaterialButtonViolet>
      </View>
      <View style={styles.materialButtonViolet9Row}>
        <MaterialButtonViolet
          style={styles.materialButtonViolet9}
        ></MaterialButtonViolet>
        <MaterialButtonViolet
          style={styles.materialButtonViolet8}
        ></MaterialButtonViolet>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(162,196,234,1)"
  },
  cupertinoHeaderWithBackground5: {
    height: 52,
    width: 375,
    marginTop: 58,
    marginLeft: -1
  },
  materialButtonViolet4: {
    height: 88,
    width: 83,
    borderRadius: 97
  },
  materialButtonViolet5: {
    height: 88,
    width: 83,
    borderRadius: 97,
    marginLeft: 71
  },
  materialButtonViolet4Row: {
    height: 88,
    flexDirection: "row",
    marginTop: 231,
    marginLeft: 65,
    marginRight: 73
  },
  palavraDaImagem: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 60,
    width: 350,
    fontSize: 30,
    textAlign: "center",
    marginTop: 28,
    marginLeft: 18
  },
  palavraBraille: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 60,
    width: 350,
    fontSize: 20,
    textAlign: "center",
    marginTop: 42,
    marginLeft: 12
  },
  materialButtonViolet1: {
    height: 32,
    width: 171,
    borderRadius: 100,
    marginTop: 51,
    marginLeft: 107
  },
  materialButtonViolet3: {
    height: 32,
    width: 171,
    borderRadius: 100,
    marginTop: -83,
    marginLeft: 107
  },
  materialButtonViolet7: {
    height: 88,
    width: 83,
    borderRadius: 97
  },
  materialButtonViolet6: {
    height: 88,
    width: 83,
    borderRadius: 97,
    marginLeft: 71
  },
  materialButtonViolet7Row: {
    height: 88,
    flexDirection: "row",
    marginTop: -414,
    marginLeft: 65,
    marginRight: 73
  },
  materialButtonViolet9: {
    height: 88,
    width: 83,
    borderRadius: 97
  },
  materialButtonViolet8: {
    height: 88,
    width: 83,
    borderRadius: 97,
    marginLeft: 71
  },
  materialButtonViolet9Row: {
    height: 88,
    flexDirection: "row",
    marginTop: -195,
    marginLeft: 65,
    marginRight: 73
  }
});

export default Exerciciosleitura;
