import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    this._loadInitialisation().done();
  }
  _loadInitialisation = async () => {
    var value = await AsyncStorage.getItem("user");
    if (value !== null) {
      this.props.navigation.navigate("Profile");
    }
  };
  render() {
    return <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.header}> -CONNEXION-</Text>
          <TextInput style={styles.textInput} placeholder="Username" onChangeText={username => this.setState(
                { username }
              )} underlineColorAndroid="transparent" />

          <TextInput style={styles.textInput} placeholder="Password" onChangeText={password => this.setState(
                { password }
              )} underlineColorAndroid="transparent" secureTextEntry={true} />
          <TouchableOpacity style={styles.btn} onPress={this.login}>
            <Text>CONNECTEZ VOUS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textdown}></Text>
            <Text style={styles.textdown}>Mot de passe Oublié?</Text>

          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textdown}>INSCRIVEZ VOUS</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>;
  }

  login = () => {
    alert('test');
  };
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
