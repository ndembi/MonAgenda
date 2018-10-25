import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator } from "react-navigation";
import * as firebase from 'firebase';
import SignIn from './app/components/sign-in/signIn';
import SignUp from "./app/components/sign-up/signUp";
import Loading from "./app/components/loading/loading";
import Dashboard from "./app/components/dashboard/dashboard";

const App = createSwitchNavigator(
  {
    SignIn,
    SignUp,
    Dashboard,
    Loading
  },
  {
    initialRouteName: "SignIn"
  }
);

const firebaseConfig = {
  apiKey: "AIzaSyDJjUeEkm7-dApWv3nKATxoPcAtROhruFg",
  authDomain: "mobagenda-1d650.firebaseapp.com",
  databaseURL: "https://mobagenda-1d650.firebaseio.com",
  projectId: "mobagenda-1d650",
  storageBucket: "mobagenda-1d650.appspot.com"
}
export default App;