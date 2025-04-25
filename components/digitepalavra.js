import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import Digitepalavras from "../components/Digitepalavras";
import CupertinoSearchBarWithMic1 from "../components/CupertinoSearchBarWithMic1";

function Digitepalavras(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      <Text style={styles.bomDia2}>DIGITE A PALAVRA DESEJADA:</Text>
      <Digitepalavras
        style={styles.cupertinoHeaderWithBackground2}
      ></Digitepalavras>
      <CupertinoSearchBarWithMic1
        style={styles.cupertinoSearchBarWithMic1}
      ></CupertinoSearchBarWithMic1>
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
  bomDia2: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 97,
    width: 344,
    fontSize: 30,
    textAlign: "center",
    marginTop: 173,
    marginLeft: 14
  },
  cupertinoHeaderWithBackground2: {
    height: 57,
    width: 375,
    marginTop: -221,
    marginLeft: -1
  },
  cupertinoSearchBarWithMic1: {
    height: 89,
    width: 353,
    marginTop: 266,
    marginLeft: 10
  }
});

export default Digitepalavras;
