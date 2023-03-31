import React, { Component } from "react";

import { Text, View, StyleSheet, TouchableOpacity, NativeModules } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 30 }}>App React Native</Text>

        
        <TouchableOpacity
          style={styles.button}
          onPress={() => NativeModules.Home.navigateToHome()}
        >
          <Text style={styles.textColor}>Chamar Módulo Nativo</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textColor: {
    color: 'white'
  }
})