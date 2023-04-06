import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../components/Navigation';
import styles from '../styles';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
  username: string;
  token: string;
};

const HomeScreen: React.FC<Props> = ({ route }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Text style={styles.message}>You are now logged in.</Text>
      </View>
    );
  };
  
  export default HomeScreen
  
