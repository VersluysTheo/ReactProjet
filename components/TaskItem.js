import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/TaskItemStyles';

export default function TaskItem({ task, onComplete, onDelete }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onComplete}>
          <Text>Terminer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onDelete}>
          <Text>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
