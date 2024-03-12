// InscriptionStyles.js

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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 8,
  },
  loginLink: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
