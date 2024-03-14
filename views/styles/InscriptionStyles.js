// InscriptionStyles.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  // Container Style
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  containerText:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  //Input 
  input: {
    backgroundColor: 'F5F5F5',
    color: '#97989D',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },

  // Checkbox
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxText: {
    fontSize: 13,
    marginLeft: 8,
    
  },

  // Login Texte et Link
  loginText:{
    marginTop: 10,
  },
  loginLink: {
    marginTop: 10,
    color: '#F33803',
    textDecorationLine: 'underline',
  },

  // Bouton
  bouton: {
    backgroundColor: '#F33803',
    borderRadius: 10, 
    paddingHorizontal: 20,
    paddingVertical: 10, 
    shadowColor: '#000',
    shadowOpacity: 0.3, 
    shadowRadius: 4,
    elevation: 5, // Elevation de l'ombre
    alignItems: 'center',
    justifyContent: 'center', 
  },
  
  // Texte des boutons 
  texteBouton: {
    color: 'white',
    fontSize: 16,
  },
});
