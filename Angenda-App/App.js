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

export default App;