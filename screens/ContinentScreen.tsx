import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContinentScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continents View</Text>
      <Text style={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis magna vel purus scelerisque bibendum. Nulla facilisi. Fusce vel nisl euismod, venenatis enim id, vestibulum libero. Morbi pharetra faucibus lacus vel finibus. In gravida, odio sed mollis bibendum, justo lacus suscipit quam, sed pellentesque nunc tellus ut urna. Sed interdum posuere ex in dapibus. Duis posuere eros et enim egestas, vel tincidunt ipsum interdum. Pellentesque auctor ex sit amet sapien eleifend, a laoreet dui malesuada. Etiam congue magna eget libero lacinia, id porttitor sapien congue. Praesent euismod convallis quam, eu tincidunt nulla interdum vitae. Donec rutrum, velit in efficitur dapibus, risus ex rhoncus justo, vel eleifend sem mauris a mauris. Curabitur vel nulla eget odio bibendum consectetur eu vel odio. Suspendisse at ipsum finibus, volutpat urna nec, hendrerit lectus. </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 22,
  },
});

export default ContinentScreen;
