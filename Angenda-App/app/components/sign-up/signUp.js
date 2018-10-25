import React from "react";
import * as firebase from "firebase";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyDJjUeEkm7-dApWv3nKATxoPcAtROhruFg",
  authDomain: "mobagenda-1d650.firebaseapp.com",
  databaseURL: "https://mobagenda-1d650.firebaseio.com",
  projectId: "mobagenda-1d650",
  storageBucket: "mobagenda-1d650.appspot.com"
};
import {style} from './style';

export default class SignUp extends React.Component {
  state = { email: "", password: "", errorMessage: null };

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Dashboard"))
      .catch(error => this.errorSignUp(error.message));
  };

  errorSignUp = error => {
    alert(error);
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={style.wrapper}>
        <View style={style.container}>
          <Text style={style.header}> -CREER UN COMPTE-</Text>
          <TextInput
            style={style.textInput}
            placeholder="email"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />

          <TextInput
            style={style.textInput}
            placeholder="Mot de passe"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />

          <TouchableOpacity style={style.btn} onPress={this.handleSignUp}>
            <Text>CREER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.signInAction}>
            <Text style={style.textdown} />
            <Text
              style={style.textdown}
              onPress={() => this.props.navigation.navigate("SignIn")}
            >
              CONNECTEZ VOUS
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
