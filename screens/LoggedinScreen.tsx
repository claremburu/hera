import React from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import styles from "../styles";

type User = {
  username: string;
  age: string;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  bloodGroup: string;
  height: string;
  weight: string;
  eyeColor: string;
};

type Props = {
  user: User;
  onLogout: () => void;
};

const LoggedInScreen: React.FC<Props> = ({ user, onLogout }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>Welcome, {user?.username}!</Text>
      <Text style={styles.body}>Your profile details is as below:</Text>
      <Text style={styles.body}>Age: {user?.age}</Text>
      <Text style={styles.body}>Gender: {user?.gender}</Text>
      <Text style={styles.body}>Email: {user?.email}</Text>
      <Text style={styles.body}>Phone: {user?.phone}</Text>
      <Text style={styles.body}>Birth Date: {user?.birthDate}</Text>
      <Text style={styles.body}>Blood Group: {user?.bloodGroup}</Text>
      <Text style={styles.body}>Height: {user?.height}</Text>
      <Text style={styles.body}>Weight: {user?.weight}</Text>
      <Text style={styles.body}>Eye Color: {user?.eyeColor}</Text>
      <Button mode="contained" onPress={onLogout} style={styles.buttonGradient}>
        Logout
      </Button>
    </View>
  );
};

export default LoggedInScreen;
