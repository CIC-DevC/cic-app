import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../home_stack';
import HistoryStack from '../history_stack';
import ScoreIncrementStack from '../score_increment_stack';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LocalizationContext} from '~/translations';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import AccountStack from '../account_stack';

const Tab = createBottomTabNavigator();

export default function MainTab({route}) {
  const currentRouteName = getFocusedRouteNameFromRoute(route) ?? 'home_stack';
  const {t} = useContext(LocalizationContext);

  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        return {
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'home_stack') {
              return <Feather name="home" size={size} color={color} />;
            } else if (route.name === 'history_stack') {
              return <MaterialIcons name="history" size={size} color={color} />;
            } else if (route.name === 'score_increment_stack') {
              return (
                <MaterialIcons name="file-upload" size={size} color={color} />
              );
            } else if (route.name === 'account_stack') {
              return <MaterialIcons name="person" size={size} color={color} />;
            }
          },
        };
      }}
      tabBarOptions={{
        activeTintColor: currentRouteName === 'home_stack' ? '#fff' : '#272B82',
        inactiveTintColor:
          currentRouteName === 'home_stack' ? '#fff' : '#8B8383',
        style: {
          backgroundColor:
            currentRouteName === 'home_stack' ? '#272B82' : '#fff',
        },
      }}>
      <Tab.Screen
        name="home_stack"
        component={HomeStack}
        options={{title: t('routes.home')}}
      />
      <Tab.Screen
        name="history_stack"
        component={HistoryStack}
        options={{title: t('routes.history')}}
      />
      <Tab.Screen
        name="score_increment_stack"
        component={ScoreIncrementStack}
        options={{title: t('routes.scoreIncrement')}}
      />
      <Tab.Screen
        name="account_stack"
        component={AccountStack}
        options={{title: t('routes.account')}}
      />
    </Tab.Navigator>
  );
}
