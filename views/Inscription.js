// Inscription.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';

import styles from './styles/InscriptionStyles';

export default function Inscription() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [confirmationMotDePasse, setConfirmationMotDePasse] = useState('');
  const [conditionsAcceptees, setConditionsAcceptees] = useState(false);

  const handleInscription = () => {
    // Logique d'inscription
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={prenom}
        onChangeText={setPrenom}
        placeholder="Prénom"
        leftIcon={{ type: 'ionicon', name: 'person' }} // Icône pour le prénom
      />
      <TextInput
        style={styles.input}
        value={nom}
        onChangeText={setNom}
        placeholder="Nom"
        leftIcon={{ type: 'ionicon', name: 'person' }} // Icône pour le nom
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Adresse e-mail"
        leftIcon={{ type: 'ionicon', name: 'mail' }} // Icône pour l'e-mail
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={telephone}
        onChangeText={setTelephone}
        placeholder="Téléphone"
        leftIcon={{ type: 'ionicon', name: 'call' }} // Icône pour le téléphone
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={motDePasse}
        onChangeText={setMotDePasse}
        placeholder="Mot de passe"
        leftIcon={{ type: 'ionicon', name: 'lock-closed' }} // Icône pour le mot de passe
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={confirmationMotDePasse}
        onChangeText={setConfirmationMotDePasse}
        placeholder="Confirmation du mot de passe"
        leftIcon={{ type: 'ionicon', name: 'lock-closed' }} // Icône pour la confirmation du mot de passe
        secureTextEntry
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setConditionsAcceptees(!conditionsAcceptees)}>
          <Text style={styles.checkboxText}>
            {conditionsAcceptees ? '☑️' : '◻️'} Accepter les conditions d'utilisation
          </Text>
        </TouchableOpacity>
      </View>
      <Button title="S'inscrire" onPress={handleInscription} />
      <TouchableOpacity>
        <Text style={styles.loginLink}>Déjà un compte ? Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}
