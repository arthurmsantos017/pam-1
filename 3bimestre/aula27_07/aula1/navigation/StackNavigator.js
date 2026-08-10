import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicial from '../screens/Inicial';
import Login from '../screens/Login';
import Final from '../screens/final';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Inicial"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000000',
          },
          headerTintColor: '#FFD700',
        }}
      >

        <Stack.Screen
          name="Inicial"
          component={Inicial}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Final"
          component={Final}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}