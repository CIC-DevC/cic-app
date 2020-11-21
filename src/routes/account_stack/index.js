import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '~/screens/account';

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="account" component={AccountScreen} />
    </Stack.Navigator>
  );
}
