import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventsListScreen from './src/screens/EventsListScreen';
import AnimationScreen from './src/screens/AnimationScreen';
import * as screenNames from './src/constants/screenNames';
import { StorageProvider } from './src/services/storage';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const Stack = createStackNavigator();

export default function App() {
  return (
    <StorageProvider>
      <NavigationContainer>
        <StatusBar style='auto' />
        <Stack.Navigator headerMode='none'>
          <Stack.Screen
            name={screenNames.ANIMATION_SCREEN}
            component={AnimationScreen}
          />
          <Stack.Screen
            name={screenNames.EVENTS_LIST_SCREEN}
            component={EventsListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StorageProvider>
  );
}
