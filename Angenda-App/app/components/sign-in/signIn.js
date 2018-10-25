import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import * as firebase from "firebase";
import {style} from './style';

const firebaseConfig = {
  apiKey: "AIzaSyDJjUeEkm7-dApWv3nKATxoPcAtROhruFg",
  authDomain: "mobagenda-1d650.firebaseapp.com",
  databaseURL: "https://mobagenda-1d650.firebaseio.com",
  projectId: "mobagenda-1d650",
  storageBucket: "mobagenda-1d650.appspot.com"
};
export default class SignIn extends React.Component {
  state = { email: "", password: "", errorMessage: null };
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Loading"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={style.wrapper}>
        <View style={style.container}>
          <Text style={style.header}> -CONNEXION-</Text>
          {this.state.errorMessage && (
            <Text style={{ color: "blue" }}>{this.state.errorMessage}</Text>
          )}
          <TextInput
            style={style.textInput}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            placeholder="Email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />
          <TextInput
            secureTextEntry
            style={style.textInput}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <TouchableOpacity style={style.btn} onPress={this.handleLogin}>
            <Text>CONNECTEZ VOUS</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={style.textdown} />
            <Text style={style.textdown}>Mot de passe Oublié?</Text>
            <Text
              onPress={() => this.props.navigation.navigate("SignUp")}
              style={style.textdown}
            >
              Créer un compte
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>
              v 0.3
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
