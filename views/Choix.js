import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles/ChoixStyles'; 


import LogoImage from '../assets/Logo.png';

export default function Choix() {
  return (
    <View style={styles.container}>
      <Image source={LogoImage} style={styles.logo} />

      <Text style={styles.phrase}>Pourquoi vous rejoindre Part'Immo ?</Text>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>J'aimerais acheter ou vendre un bien</Text>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>J'aimerais proposer mes services</Text>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>
    </View>
  );
}
