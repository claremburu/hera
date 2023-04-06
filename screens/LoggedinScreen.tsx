import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

type User = {
  username: string;
};

type Props = {
  user: User;
  onLogout: () => void;
};

const LoggedInScreen: React.FC<Props> = ({ user, onLogout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>Welcome, {user?.username}!</Text>
      <Button onPress={onLogout} style={styles.buttonGradient}>Logout</Button>
    </View>
  );
};

export default LoggedInScreen;
