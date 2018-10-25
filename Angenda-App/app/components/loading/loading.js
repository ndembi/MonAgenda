import React from "react";
import * as firebase from "firebase";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import {style} from './style';


const firebaseConfig = {
  apiKey: "AIzaSyDJjUeEkm7-dApWv3nKATxoPcAtROhruFg",
  authDomain: "mobagenda-1d650.firebaseapp.com",
  databaseURL: "https://mobagenda-1d650.firebaseio.com",
  projectId: "mobagenda-1d650",
  storageBucket: "mobagenda-1d650.appspot.com"
};

export default class Loading extends React.Component {
  componentDidMount() {
    try {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? "Dashboard" : "SignUp");
      });
    } catch (error) {
      console.error(error);
      console.log("UNE ERREUR EST SURVENUE LORS DE LA CONNEXION A LA BDD");
    }
  }
  render() {
    return (
      <View style={style.container}>
        <Text>CONNEXION EN COURS....</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
