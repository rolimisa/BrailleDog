import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Claroescuro from "../components/Claroescuro";

function Menu(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      <View style={styles.textStack}>
        <Text style={styles.text}>MENU</Text>
        <Text style={styles.menuprincipal}>MENU</Text>
      </View>
      <View style={styles.configStackRow}>
        <View style={styles.configStack}>
          <Svg viewBox="0 0 142.49 136.8" style={styles.config}>
            <Ellipse
              strokeWidth={2}
              cx={71}
              cy={68}
              rx={70}
              ry={67}
              fill="rgba(253,237,124,0.62)"
              stroke="rgba(0,0,0,1)"
            ></Ellipse>
          </Svg>
          <Text style={styles.configuracoes}>CONFIGURAÇÕES</Text>
        </View>
        <View style={styles.sobreappStack}>
          <Svg viewBox="0 0 142.49 136.8" style={styles.sobreapp}>
            <Ellipse
              strokeWidth={2}
              cx={71}
              cy={68}
              rx={70}
              ry={67}
              fill="rgba(253,237,124,0.62)"
              stroke="rgba(0,0,0,1)"
            ></Ellipse>
          </Svg>
          <Text style={styles.sobre}>SOBRE</Text>
        </View>
      </View>
      <View style={styles.palavrasbrailleStackRow}>
        <View style={styles.palavrasbrailleStack}>
          <Svg viewBox="0 0 142.49 136.8" style={styles.palavrasbraille}>
            <Ellipse
              strokeWidth={2}
              cx={71}
              cy={68}
              rx={70}
              ry={67}
              fill="rgba(253,237,124,0.62)"
              stroke="rgba(0,0,0,1)"
            ></Ellipse>
          </Svg>
          <Text style={styles.palavrasEmBraille}>
            PALAVRAS{"\n"}EM{"\n"}BRAILLE
          </Text>
        </View>
        <View style={styles.exerciciosleituraStack}>
          <Svg viewBox="0 0 142.49 136.8" style={styles.exerciciosleitura}>
            <Ellipse
              strokeWidth={2}
              cx={71}
              cy={68}
              rx={70}
              ry={67}
              fill="rgba(253,237,124,0.62)"
              stroke="rgba(0,0,0,1)"
            ></Ellipse>
          </Svg>
          <Text style={styles.exercicios2}>EXERCÍCIOS</Text>
        </View>
      </View>
      <View style={styles.alfabetobrailleStackRow}>
        <View style={styles.alfabetobrailleStack}>
          <Svg viewBox="0 0 142.49 136.8" style={styles.alfabetobraille}>
            <Ellipse
              strokeWidth={2}
              cx={71}
              cy={68}
              rx={70}
              ry={67}
              fill="rgba(253,237,124,0.62)"
              stroke="rgba(0,0,0,1)"
            ></Ellipse>
          </Svg>
          <Text style={styles.alfabetoemBraille}>ALFABETOEM{"\n"}BRAILLE</Text>
        </View>
        <View style={styles.numerosbrailleStack}>
          <Svg viewBox="0 0 142.49 136.8" style={styles.numerosbraille}>
            <Ellipse
              strokeWidth={2}
              cx={71}
              cy={68}
              rx={70}
              ry={67}
              fill="rgba(253,237,124,0.62)"
              stroke="rgba(0,0,0,1)"
            ></Ellipse>
          </Svg>
          <Text style={styles.numerosEmBraille8}>NÚMEROS EM {"\n"}BRAILLE</Text>
        </View>
      </View>
      <Claroescuro style={styles.cupertinoSwitch}></Claroescuro>
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
  text: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 65,
    width: 237,
    fontSize: 35,
    textAlign: "center"
  },
  menuprincipal: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 65,
    width: 237,
    fontSize: 35,
    textAlign: "center"
  },
  textStack: {
    width: 237,
    height: 65,
    marginTop: 46,
    marginLeft: 68
  },
  config: {
    top: 0,
    left: 0,
    width: 142,
    height: 137,
    position: "absolute"
  },
  configuracoes: {
    top: 58,
    left: 8,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 13,
    width: 127,
    height: 35
  },
  configStack: {
    width: 142,
    height: 137
  },
  sobreapp: {
    top: 0,
    left: 0,
    width: 142,
    height: 137,
    position: "absolute"
  },
  sobre: {
    top: 55,
    left: 15,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 20,
    width: 111,
    height: 38
  },
  sobreappStack: {
    width: 142,
    height: 137,
    marginLeft: 37
  },
  configStackRow: {
    height: 137,
    flexDirection: "row",
    marginTop: 443,
    marginLeft: 26,
    marginRight: 28
  },
  palavrasbraille: {
    top: 0,
    left: 0,
    width: 142,
    height: 137,
    position: "absolute"
  },
  palavrasEmBraille: {
    top: 20,
    left: 15,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 20,
    width: 111,
    height: 96
  },
  palavrasbrailleStack: {
    width: 142,
    height: 137
  },
  exerciciosleitura: {
    top: 0,
    left: 0,
    width: 142,
    height: 137,
    position: "absolute"
  },
  exercicios2: {
    left: 15,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 17,
    width: 111,
    height: 45,
    top: 46
  },
  exerciciosleituraStack: {
    width: 142,
    height: 137,
    marginLeft: 37
  },
  palavrasbrailleStackRow: {
    height: 137,
    flexDirection: "row",
    marginTop: -354,
    marginLeft: 26,
    marginRight: 28
  },
  alfabetobraille: {
    top: 0,
    left: 0,
    width: 142,
    height: 137,
    position: "absolute"
  },
  alfabetoemBraille: {
    top: 21,
    left: 15,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 20,
    width: 111,
    height: 96
  },
  alfabetobrailleStack: {
    width: 142,
    height: 137
  },
  numerosbraille: {
    top: 0,
    left: 0,
    width: 142,
    height: 137,
    position: "absolute"
  },
  numerosEmBraille8: {
    top: 21,
    left: 15,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 20,
    width: 111,
    height: 96
  },
  numerosbrailleStack: {
    width: 142,
    height: 137,
    marginLeft: 37
  },
  alfabetobrailleStackRow: {
    height: 137,
    flexDirection: "row",
    marginTop: -350,
    marginLeft: 26,
    marginRight: 28
  },
  cupertinoSwitch: {
    width: 106,
    height: 47,
    borderRadius: 71,
    overflow: "visible",
    marginTop: 462,
    marginLeft: 134
  }
});

export default Menu;