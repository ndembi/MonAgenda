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
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}> -CREER UN COMPTE-</Text>
          <TextInput
            style={styles.textInput}
            placeholder="email"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Mot de passe"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.btn} onPress={this.handleSignUp}>
            <Text>CREER</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.signInAction}>
            <Text style={styles.textdown} />
            <Text
              style={styles.textdown}
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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff530d",
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: "#fff",
    fontWeight: "bold"
  },
  textInput: {
    alignSelf: "stretch",
    padding: 16,
    marginBottom: 20,
    backgroundColor: "#fff"
  },
  btn: {
    alignSelf: "stretch",
    padding: 16,
    backgroundColor: "#01c853",
    padding: 20,
    alignItems: "center"
  },
  textdown: {
    fontSize: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff530d"
  }
});
