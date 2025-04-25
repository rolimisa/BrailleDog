import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import MaterialCheckboxWithLabel from "../components/MaterialCheckboxWithLabel";
import MaterialFixedLabelTextbox1 from "../components/MaterialFixedLabelTextbox1";
import Email from "../components/Email";
import MaterialRightIconTextbox1 from "../components/MaterialRightIconTextbox1";
import Cadastrarlogin from "../components/Cadastrarlogin";
import CupertinoButtonPurple from "../components/CupertinoButtonPurple";

function Login(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      <Text style={styles.brailledog}>BRAILLEDOG</Text>
      <Image
        source={require("../assets/images/Imagem_07-04-2025_às_21.42.jpeg")}
        resizeMode="cover"
        style={styles.logotipo}
      ></Image>
      <View style={styles.materialCheckboxWithLabelRow}>
        <MaterialCheckboxWithLabel
          style={styles.materialCheckboxWithLabel}
        ></MaterialCheckboxWithLabel>
        <MaterialFixedLabelTextbox1
          style={styles.materialFixedLabelTextbox1}
        ></MaterialFixedLabelTextbox1>
      </View>
      <Email style={styles.senha}></Email>
      <MaterialRightIconTextbox1
        style={styles.materialRightIconTextbox1}
      ></MaterialRightIconTextbox1>
      <Cadastrarlogin style={styles.materialButtonViolet}></Cadastrarlogin>
      <CupertinoButtonPurple
        style={styles.cupertinoButtonPurple}
      ></CupertinoButtonPurple>
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
    marginTop: 421,
    alignSelf: "center"
  },
  logotipo: {
    width: 280,
    height: 337,
    borderRadius: 73,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: -399,
    marginLeft: 49
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
    marginTop: 14
  },
  materialFixedLabelTextbox1: {
    height: 39,
    width: 88,
    marginLeft: 100
  },
  materialCheckboxWithLabelRow: {
    height: 40,
    flexDirection: "row",
    marginTop: 158,
    marginLeft: 34,
    marginRight: 46
  },
  senha: {
    height: 33,
    width: 280,
    marginTop: -121,
    marginLeft: 49
  },
  materialRightIconTextbox1: {
    height: 33,
    width: 280,
    marginTop: 12,
    marginLeft: 49
  },
  materialButtonViolet: {
    height: 42,
    width: 177,
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 27,
    marginTop: 60,
    marginLeft: 100
  },
  cupertinoButtonPurple: {
    height: 44,
    width: 177,
    marginTop: 59,
    marginLeft: 98
  }
});

export default Login;
