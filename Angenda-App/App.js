import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import './app';

const firebaseConfig = {
  apiKey: "AIzaSyDJjUeEkm7-dApWv3nKATxoPcAtROhruFg",
  authDomain: "mobagenda-1d650.firebaseapp.com",
  databaseURL: "https://mobagenda-1d650.firebaseio.com",
  projectId: "mobagenda-1d650",
  storageBucket: "mobagenda-1d650.appspot.com"
}
const firebaseObject = firebase.initializeApp(firebaseConfig);
export default class App extends React.Component { 
  componentDidMount() {

    console.log(firebaseObject.auth);
    
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});