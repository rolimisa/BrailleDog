import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Menupalavras from "../components/Menupalavras";

function Palavrasbraille(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      <View style={styles.exerciciosleituraStack}>
        <Svg viewBox="0 0 182.4 174.23" style={styles.exerciciosleitura}>
          <Ellipse
            strokeWidth={2}
            cx={91}
            cy={87}
            rx={90}
            ry={86}
            fill="rgba(253,237,124,0.62)"
            stroke="rgba(0,0,0,1)"
          ></Ellipse>
        </Svg>
        <Text style={styles.historico}>HISTÓRICO DE PALAVRAS</Text>
      </View>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 182.4 183.05" style={styles.ellipse}>
          <Ellipse
            strokeWidth={2}
            cx={91}
            cy={92}
            rx={90}
            ry={91}
            fill="rgba(253,237,124,0.62)"
            stroke="rgba(0,0,0,1)"
          ></Ellipse>
        </Svg>
        <Text style={styles.comoVoceEstaHoje}>
          DIGITE A{"\n"}PALAVRA{"\n"}DESEJADA PARA TRADUZIR
        </Text>
      </View>
      <Menupalavras style={styles.materialHeader1}></Menupalavras>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(162,196,234,1)",
    borderWidth: 1,
    borderColor: "#000000"
  },
  exerciciosleitura: {
    top: 0,
    left: 0,
    width: 182,
    height: 174,
    position: "absolute"
  },
  historico: {
    top: 44,
    left: 25,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 20,
    width: 132,
    height: 105
  },
  exerciciosleituraStack: {
    width: 182,
    height: 174,
    marginTop: 461,
    marginLeft: 102
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 182,
    height: 183,
    position: "absolute"
  },
  comoVoceEstaHoje: {
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 19,
    width: 107,
    height: 147,
    top: 17,
    left: 37
  },
  ellipseStack: {
    width: 182,
    height: 183,
    marginTop: -451,
    marginLeft: 102
  },
  materialHeader1: {
    height: 56,
    width: 375,
    marginTop: -321,
    alignSelf: "center"
  }
});

export default Palavrasbraille;
