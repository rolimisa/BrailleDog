import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";
import MaterialSpinner from "../components/MaterialSpinner";

function Appbrailledog(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      <Text style={styles.brailledog}>BRAILLEDOG</Text>
      <Image
        source={require("../assets/images/Imagem_07-04-2025_às_21.42.jpeg")}
        resizeMode="cover"
        style={styles.logotipo}
      ></Image>
      <MaterialSpinner style={styles.materialSpinner}></MaterialSpinner>
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
    marginTop: 462,
    alignSelf: "center"
  },
  logotipo: {
    width: 280,
    height: 337,
    borderRadius: 73,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: -404,
    marginLeft: 47
  },
  materialSpinner: {
    width: 160,
    height: 149,
    marginTop: 83,
    marginLeft: 106
  }
});

export default Appbrailledog;
