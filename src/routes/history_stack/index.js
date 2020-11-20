import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HistoryScreen from '~/screens/history';

const Stack = createStackNavigator();

export default function HistoryStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='history' component={HistoryScreen} />
    </Stack.Navigator>
  );
}
