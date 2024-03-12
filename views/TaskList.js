import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity } from 'react-native';
import TaskItem from '../components/TaskItem';
import TaskController from '../controllers/TaskController';
import { useNavigation } from '@react-navigation/native';

import styles from './styles/TaskListStyles';

export default function TaskList() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState(TaskController.getTasks());
  const navigation = useNavigation();

  const addTask = () => {
    if (title.trim() !== '') {
      TaskController.addTask(title);
      setTitle('');
      setTasks(TaskController.getTasks());
    }
  };

  const completeTask = task => {
    TaskController.completeTask(task);
    setTasks(TaskController.getTasks());
  };

  const deleteTask = task => {
    TaskController.deleteTask(task);
    setTasks(TaskController.getTasks());
  };

  const navigateToTextScreen = () => {
    navigation.navigate('TextScreen');
  };

  const navigateToLoginScreen = () => {
    navigation.navigate('LoginScreen');
  };

  const navigateToInscription = () => {
    navigation.navigate('Inscription');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Ajouter une tâche"
      />
      <Button title="Ajouter" onPress={addTask} />
      {tasks.map(task => (
        <TaskItem
          key={task.title}
          task={task}
          onComplete={() => completeTask(task)}
          onDelete={() => deleteTask(task)}
        />
      ))}
      <TouchableOpacity style={styles.button}><Button title="Aller vers le texte" onPress={navigateToTextScreen} /></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Button title="Se connecter" onPress={navigateToLoginScreen} /></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Button title="S'inscrire" onPress={navigateToInscription} /></TouchableOpacity>
    </View>
  );
}
