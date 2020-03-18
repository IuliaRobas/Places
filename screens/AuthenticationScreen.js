import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { store } from "../Root";
import * as actions from "../store/actions/index";

const AuthenticationScreen = props => {
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const isValidInput = () => {
    return email.trim.length != 0 || password.trim().length != 0;
  };

  const onPressSignIn = () => {
    // if (isValidInput()) {
    props.onSignIn(email, password);
    // } else {
    //   Alert.alert("", "Please fill in the required fields.");
    // }
  };

  const onPressSignUp = () => {
    setIsSignUp(true);
    // props.onSignUp(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Icon name="location-on" size={20}></Icon>
        <Text style={styles.logoText}>urPlace</Text>
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email address"
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={text => {
              setPassword(text);
            }}
            secureTextEntry
            style={styles.inputText}
            value={password}
            placeholder="Password"
          ></TextInput>
        </View>
        {!isSignUp ? (
          <TouchableOpacity onPress={onPressSignIn} style={styles.loginButton}>
            <Text style={styles.authenticateText}>log in</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onPressSignIn} style={styles.loginButton}>
            <Text style={styles.authenticateText}>register</Text>
          </TouchableOpacity>
        )}
      </View>
      {!isSignUp ? (
        <View style={styles.registerContainer}>
          <Text style={styles.questionText}>Not a member yet?</Text>
          <TouchableOpacity
            onPress={() => {
              onPressSignUp();
            }}
          >
            <Text style={styles.optionText}>Register</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.registerContainer}>
          <Text style={styles.questionText}>Don't want an account?</Text>
          <Text style={styles.optionText}>Continue as visitor</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => {
  const { token } = state;
  return { token };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: (email, password) => dispatch(actions.signIn(email, password)),
    onSignUp: (email, password) => dispatch(actions.signUp(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 667,
    width: 375,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center"
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.26,
    marginTop: 16,
    marginBottom: 92
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  inputContainer: {
    height: 64,
    width: 315,
    marginBottom: 2,
    justifyContent: "center"
  },
  loginButton: {
    marginTop: 18,
    width: 280,
    height: 48,
    backgroundColor: "#00ca9d",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  authenticateText: {
    textTransform: "uppercase",
    color: "#fff"
  },
  inputText: {
    color: "#5f5d70",
    marginLeft: 53
  },
  registerContainer: {
    marginTop: 135,
    alignItems: "center",
    justifyContent: "center"
  },
  questionText: {
    color: "#9b99a9",
    fontSize: 14,
    letterSpacing: 0,
    textAlign: "center"
  },
  optionText: {
    color: "#00ca9d",
    fontSize: 16,
    letterSpacing: 0,
    textAlign: "center"
  }
});
