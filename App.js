import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventsListScreen from './src/screens/EventsListScreen';
import AnimationScreen from './src/screens/AnimationScreen';
import * as screenNames from './src/constants/screenNames';
import { StorageProvider } from './src/services/storage';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';

const fonts = {
  'gs-bold': require('./assets/fonts/GeppertSans-Bold.otf'),
  'gs-bold-italic': require('./assets/fonts/GeppertSans-BoldItalic.otf'),
  'gs-book': require('./assets/fonts/GeppertSans-Book.otf'),
  'gs-book-italic': require('./assets/fonts/GeppertSans-BookItalic.otf'),
  'gs-medium': require('./assets/fonts/GeppertSans-Medium.otf'),
  'gs-regular': require('./assets/fonts/GeppertSans-Regular.otf'),
  'gs-regular-italic': require('./assets/fonts/GeppertSans-RegularItalic.otf'),
};

const Stack = createStackNavigator();

export default function App() {
  const [areFontsLoaded] = useFonts(fonts);

  if (!areFontsLoaded) {
    return <AppLoading />;
  }
  return (
    <StorageProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator headerMode="none">
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
