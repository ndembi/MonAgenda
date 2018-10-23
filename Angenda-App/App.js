import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import SignIn from './app/components/sign-in/sign-in';
import SignUp from "./app/components/sign-up/sign-up";
import CreeateFamilly from "./app/components/dashboard/createfamilly";

// const firebaseConfig = {
//   apiKey: "AIzaSyDJjUeEkm7-dApWv3nKATxoPcAtROhruFg",
//   authDomain: "mobagenda-1d650.firebaseapp.com",
//   databaseURL: "https://mobagenda-1d650.firebaseio.com",
//   projectId: "mobagenda-1d650",
//   storageBucket: "mobagenda-1d650.appspot.com"
// }
// const firebaseObject = firebase.initializeApp(firebaseConfig);
export default class App extends React.Component {
  componentDidMount() {

    // console.log(firebaseObject.auth);

  }
  render() {
    return (
      <CreeateFamilly/>
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