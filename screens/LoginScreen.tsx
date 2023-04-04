import React, { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import styles from "../styles";
import { LinearGradient } from "expo-linear-gradient";

type RootStackParamList = {
  Login: undefined;
  Home: { username: string };
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
  const [text, setText] = React.useState<string>("");
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  const handleLogin = async () => {
    const response = await fetch(usersUrl);
    const users: User[] = await response.json();

    const currentUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (currentUser) {
      navigation.navigate("Home", { username: currentUser.username });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <Text variant="displayMedium" style={styles.title}>
        Welcome{" "}
      </Text>
      <Text variant="displaySmall" style={styles.body}>
        Good to see you!
      </Text>
      <TextInput
        label="Email"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        right={<TextInput.Icon icon="email" />}
        activeUnderlineColor="#9E5313"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
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
      {/* <LinearGradient
        colors={["#9E5313", "#E7AA39", "#F7FC97", "#E7AA39", "#632507"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.buttonGradient}
      >
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </LinearGradient> */}
      <Button mode="contained" onPress={handleLogin} style={styles.buttonGradient}>
        Log In
      </Button>
    </View>
  );
};

export default LoginScreen;
