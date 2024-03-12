import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    width: '30%',
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 20,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});
