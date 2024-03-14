import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  // containers style
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  inscrContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkboxContainer:{
    marginTop: 10,
  },

  // inputs style
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
  logo: {
    width: 120,
    height: 60,
    marginBottom: 20,
  },


  // Boutons
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

  // Textes

  forgotPasswordText: {
    marginTop: 10,
    color: '#F33803',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },

  texteBouton: {
    color: 'white',
    fontSize: 16,
  },
  inscriptionText:{
    textDecorationLine: 'underline',
    color: '#F33803',
  },
  
});
