import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Historicopalavra from "../components/Historicopalavra";

function Historicopalavra(props) {
  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" />
      <Historicopalavra
        style={styles.cupertinoHeaderWithBackground2}
      ></Historicopalavra>
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
  cupertinoHeaderWithBackground2: {
    height: 52,
    width: 375,
    marginTop: 58,
    marginLeft: -1
  }
});

export default Historicopalavra;
