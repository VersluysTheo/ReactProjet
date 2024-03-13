import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 20,
  },
  phrase: {
    fontSize: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent', 
    borderWidth: 1,
    borderColor: 'orange', 
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: '#F33803',
    fontSize: 16,
    flex: 1, 
  },
  arrow: {
    fontSize: 20,
    marginLeft: 10,
  },
});
