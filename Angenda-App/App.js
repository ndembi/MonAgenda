import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator } from "react-navigation";
import * as firebase from 'firebase';
import SignIn from './app/components/sign-in/sign-in';
import SignUp from "./app/components/sign-up/sign-up";
import CreateFamilly from "./app/components/dashboard/createfamilly";
import Loading from "./app/components/loading/loading";
import Dashboard from "./app/components/dashboard/dashboard";

const App = createSwitchNavigator(
  {
    SignIn,
    SignUp,
    CreateFamilly,
    Dashboard,
    Loading
  },
  {
    initialRouteName: "SignUp"
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
// const firebaseObject = firebase.initializeApp(firebaseConfig);
// export default class App extends React.Component {
//   // componentDidMount() {

//   //   if (!firebase.apps.length) {
//   //     firebase.initializeApp(firebaseConfig);
//   //   }
//   //   firebase.database().ref('personnage').once('value', function (snapshot) {
//   //     console.log(snapshot.val())
//   //   });

//   //   // console.log(firebaseObject.auth);

//   // }
//   render() {
//     return <Dashboard />;
//   }
// }

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