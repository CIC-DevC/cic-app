import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './main_tab';
import { connect } from 'react-redux';
import AuthStack from './auth_stack';

const Stack = createStackNavigator();

const mapStateToProps = (state, ownProps) => ({
  isLogin: state.auth.token !== null,
});

function Routes({ isLogin }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLogin ? (
          <>
            <Stack.Screen name='main_tab' component={MainTab} />
          </>
        ) : (
          <>
            <Stack.Screen name='auth_stack' component={AuthStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default connect(mapStateToProps)(Routes);
