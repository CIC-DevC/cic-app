import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ScoreIncrementScreen from '~/screens/score_increment';

const Stack = createStackNavigator();

export default function ScoreIncrementStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='score_increment' component={ScoreIncrementScreen} />
    </Stack.Navigator>
  );
}
