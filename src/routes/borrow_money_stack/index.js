import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BorrowMoneyScreen from '~/screens/borrow_money';

const Stack = createStackNavigator();

export default function BorrowMoneyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='borrow_money' component={BorrowMoneyScreen} />
    </Stack.Navigator>
  );
}
