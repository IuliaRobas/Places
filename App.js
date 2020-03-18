import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  AppRegistry,
  StatusBar,
  Button
} from "react-native";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import * as actions from "./store/actions/index";
import { store } from "./Root";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import MainScreen from "./screens/discover/DiscoverMainScreen";

const Stack = createStackNavigator();

const App = props => {
  const restoreToken = () => {
    const token = props.token;
    props.restoreToken(token);
  };

  useEffect(() => {
    //restoreToken();
  }, []);

  const onPressSignOut = () => {
    props.onSignOut();
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content"></StatusBar>
      {!props.token ? (
        <AuthenticationScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={{
                title: "Discover",
                headerRight: () => (
                  <View style={styles.headerRight}>
                    <Icon
                      name="filter"
                      size={20}
                      onPress={() => onPressSignOut()}
                      title="Info"
                      // color="#000"
                      style={{
                        color: "green"
                      }}
                    />
                  </View>
                )
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
};

//AppRegistry.registerComponent("App", () => App);
const mapStateToProps = state => {
  return { token: state.token };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => dispatch(actions.signOut()),
    restoreToken: token => dispatch(actions.restoreToken(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

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
  loginButtonContainer: {
    marginTop: 18,
    width: 280,
    height: 48,
    backgroundColor: "#00ca9d",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  loginText: {
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
  registerText: {
    color: "#00ca9d",
    fontSize: 16,
    letterSpacing: 0,
    textAlign: "center"
  },
  headerRight: {
    marginRight: 20,
    flexDirection: "row"
  },
  icon: {
    marginLeft: 23
  }
});
