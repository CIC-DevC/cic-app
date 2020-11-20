import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '~/screens/home';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={HomeScreen} />
    </Stack.Navigator>
  );
}
