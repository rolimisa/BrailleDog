import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import Email from "../components/Email";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import Cadastrado from "../components/Cadastrado";

function Cadastrar(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      <Text style={styles.brailledog}>BRAILLEDOG</Text>
      <Image
        source={require("../assets/images/Imagem_07-04-2025_às_21.42.jpeg")}
        resizeMode="cover"
        style={styles.logotipo}
      ></Image>
      <MaterialCheckboxWithLabel
        style={styles.materialCheckboxWithLabel}
      ></MaterialCheckboxWithLabel>
      <Email style={styles.senha}></Email>
      <MaterialRightIconTextbox1
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox1>
      <Cadastrado style={styles.cupertinoButtonPurple1}></Cadastrado>
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
  brailledog: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 56,
    width: 290,
    fontSize: 40,
    textAlign: "center",
    marginTop: 430,
    alignSelf: "center"
  },
  logotipo: {
    width: 280,
    height: 337,
    borderRadius: 73,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: -398,
    marginLeft: 47
  },
  materialCheckboxWithLabel: {
    height: 26,
    width: 107,
    backgroundColor: "rgba(230, 230, 230,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    overflow: "visible",
    marginTop: 178,
    marginLeft: 219
  },
  senha: {
    height: 33,
    width: 280,
    marginTop: -119,
    marginLeft: 47
  },
  materialRightIconTextbox1: {
    height: 33,
    width: 280,
    marginTop: 16,
    marginLeft: 47
  },
  cupertinoButtonPurple1: {
    height: 44,
    width: 108,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000000",
    marginTop: 95,
    marginLeft: 136
  }
});

export default Cadastrar;
