import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from './views/TaskList';
import TextScreen from './views/TextScreen';
import LoginScreen from './views/LoginScreen';
import Inscription from './views/Inscription';
import Choix from './views/Choix';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskList} />
        <Stack.Screen name="TextScreen" component={TextScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="Choix" component={Choix} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
