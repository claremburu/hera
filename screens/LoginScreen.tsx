import React, { useEffect, useState } from "react";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import styles from "../styles";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import LoggedInScreen from "./LoggedinScreen";

type RootStackParamList = {
  Login: undefined;
  Home: { username: string };
  Users: { username: string; token: string };
};

type LoginScreenRouteProp = RouteProp<RootStackParamList, "Login">;

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type Props = {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
};

type User = {
  username: string;
  password: string;
};

const usersUrl = "https://dummyjson.com/users";

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [users, setUsers] = useState<User | null>(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleChangeUsername = (text: string) => setUsername(text);
  const handleChangePassword = (text: string) => setPassword(text);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((response) => {
      // console.log(response, "response");
      console.log(response?.data?.users, "users");
      setUsers(response?.data?.users);
    });
  }, []);

  console.log(users);

  const handleLogin = () => {
    if (users && Array.isArray(users)) {
      const foundUser = users.find(
        (user: User) =>
          user?.username === username && user?.password === password
      );
      console.log(foundUser?.username, "found");
      if (foundUser) {
        axios
          .post("https://dummyjson.com/auth/login", {
            username: foundUser.username,
            password: foundUser.password,
          })
          .then((response) => {
            if (response?.data?.token) {
              setLoggedInUser(foundUser);
              setUsername("");
              setPassword("");
              setSnackbarVisible(false);
              navigation.navigate("Users", {
                username: foundUser.username,
                token: response.data.token,
              });
            } else {
              setSnackbarVisible(true);
            }
          })
          .catch((error) => {
            Alert.alert("Error", "Failed to authenticate");
          });
      } else {
        Alert.alert("Error", "Invalid username or password");
      }
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  console.log(loggedInUser, "loggedinuser");
  return (
    <View style={styles.container}>
      {loggedInUser ? (
        <LoggedInScreen user={loggedInUser} onLogout={handleLogout} />
      ) : (
        <>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Text variant="displayMedium" style={styles.title}>
            Welcome{" "}
          </Text>
          <Text variant="displaySmall" style={styles.body}>
            Good to see you!
          </Text>
          <TextInput
            // mode="outlined"
            label="Username"
            value={username}
            onChangeText={handleChangeUsername}
            style={styles.input}
            right={<TextInput.Icon icon="account" />}
            activeUnderlineColor="#9E5313"
          />
          <TextInput
            // mode="outlined"
            label="Password"
            value={password}
            onChangeText={handleChangePassword}
            secureTextEntry={secureTextEntry}
            activeUnderlineColor="#9E5313"
            right={
              <TextInput.Icon
                icon={secureTextEntry ? "eye-off" : "eye"}
                onPress={() => {
                  setSecureTextEntry(!secureTextEntry);
                  return false;
                }}
              />
            }
            style={styles.input}
          />
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.buttonGradient}
          >
            Log In
          </Button>
        </>
      )}
    </View>
  );
};

export default LoginScreen;
