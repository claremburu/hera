import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#131B23',
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
    alignSelf: "stretch",
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  body: {
    fontSize:20,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white'
  },
  logo: {
    width: 100 ,
    height: 100,
    // alignItems: 'center',
  },
  buttonGradient: {
    padding: 10,
    borderRadius: 5,
    alignSelf: "stretch",
    backgroundColor: "#9E5313"
  },
  buttonText: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
  },
});

export default styles;

