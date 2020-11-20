import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '~/screens/login';
import ConfirmOtpScreen from '~/screens/confirm_otp';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='confirm_otp' component={ConfirmOtpScreen} />
    </Stack.Navigator>
  );
}
