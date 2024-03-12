import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, TouchableOpacity } from 'react-native';
import LogoImage from '../assets/Logo.png';

import styles from './styles/LoginScreenStyles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Connexion
    if (email === 'user@example.com' && password === 'password') {
      // Connexion réussie
      navigation.navigate('Home');
    } else {
      // Connexion échoué
      setErrorMessage('Identifiants invalides. Veuillez réessayer.');
    }
  };
  
  const handleForgotPassword = () => {
    // Reinitialisation de mot de passe
    if (email === '') {
      // Message aucun email saisie
      setErrorMessage('Veuillez entrer votre e-mail pour réinitialiser le mot de passe.');
    } else {
      // Simuler l'envoi d'un e-mail de réinitialisation
      // Ici, vous pouvez appeler votre API ou service pour envoyer un e-mail de réinitialisation de mot de passe
      setErrorMessage('Un e-mail de réinitialisation du mot de passe a été envoyé à votre adresse e-mail.');
    }
  };
  

  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logo} />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Adresse e-mail"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        secureTextEntry
      />
      <Button title="Se connecter" onPress={handleLogin} />
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
}
