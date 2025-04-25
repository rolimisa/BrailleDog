import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Exerciciosbraille from "../components/Exerciciosbraille";

function Exerciciosbraille(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
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
        <Text style={styles.comoVoceEstaHoje}>EXERCÍCIOS DE {"\n"}LEITURA</Text>
      </View>
      <Exerciciosbraille style={styles.materialHeader1}></Exerciciosbraille>
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
    width: 132,
    height: 89,
    top: 47,
    left: 25
  },
  ellipseStack: {
    width: 182,
    height: 183,
    marginTop: 313,
    marginLeft: 95
  },
  materialHeader1: {
    height: 56,
    width: 375,
    marginTop: -444
  }
});

export default Exerciciosbraille;

