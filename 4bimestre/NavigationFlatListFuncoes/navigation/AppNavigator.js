import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetalhesScreen from '../screens/DetalhesScreen';
import FuncoesScreen from '../screens/FuncoesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#e52521',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            title: 'Super Mario',
          }}
        />

        <Stack.Screen
          name="Detalhes"
          component={DetalhesScreen}
          options={{
            title: 'Detalhes do personagem',
          }}
        />

        <Stack.Screen
          name="Funcoes"
          component={FuncoesScreen}
          options={{
            title: 'Funções',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}