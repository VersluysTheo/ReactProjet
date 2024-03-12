import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signInWithEmailAndPassword, sendPasswordResetEmail, signInWithGoogleAsync } from '../services/authService'; // Importez les fonctions d'authentification
import styles from './styles/LoginScreenStyles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(email, password); // Authentification par e-mail et mot de passe
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(email); // Envoyer un e-mail de réinitialisation du mot de passe
      setErrorMessage('Un e-mail de réinitialisation du mot de passe a été envoyé à votre adresse e-mail.');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogleAsync(); // Authentification via Google
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
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
      <Button title="Mot de passe oublié ?" onPress={handleForgotPassword} />
      <Button title="Se connecter avec Google" onPress={handleGoogleLogin} />
      {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
    </View>
  );
}
