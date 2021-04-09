import NotificationList from './src/screens/NotificationList/NotificationList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TAP_BAR_OPTIONS } from './src/constants/tabBarOptions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventsListScreen from './src/screens/EventsListScreen';
import GraduateCupIcon from './assets/svg/graduate_cup.svg';
import AnimationScreen from './src/screens/AnimationScreen';
import AnniversaryCalendarListScreen from './src/screens/anniversary_calendar/AnniversaryCalendarListScreen';
import * as screenNames from './src/constants/screenNames';
import AnniversaryIcon from './assets/svg/anniversary.svg';
import { StorageProvider } from './src/services/storage';
import CalendarIcon from './assets/svg/calendar.svg';
import RingIcon from './assets/svg/ring.svg';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import DepartmentSwitchboardScreen from './src/screens/DepartmentSwitchboardScreen/DepartmentSwitchboardScreen';
import NotificationDetails from './src/screens/NotificationDetails/NotificationDetails';

const fonts = {
  'gs-bold': require('./assets/fonts/GeppertSans-Bold.otf'),
  'gs-bold-italic': require('./assets/fonts/GeppertSans-BoldItalic.otf'),
  'gs-book': require('./assets/fonts/GeppertSans-Book.otf'),
  'gs-book-italic': require('./assets/fonts/GeppertSans-BookItalic.otf'),
  'gs-medium': require('./assets/fonts/GeppertSans-Medium.otf'),
  'gs-regular': require('./assets/fonts/GeppertSans-Regular.otf'),
  'gs-regular-italic': require('./assets/fonts/GeppertSans-RegularItalic.otf'),
};

export default function App() {
  const [areFontsLoaded] = useFonts(fonts);

  if (!areFontsLoaded) {
    return <AppLoading />;
  }
  return (
    <StorageProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainStackNavigator />
      </NavigationContainer>
    </StorageProvider>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screenNames.TAB_NAVIGATOR_SCREEN}
      component={MainTabNavigator}
    />
    <Stack.Screen
      name={screenNames.ANIMATION_SCREEN}
      component={AnimationScreen}
    />
    <Stack.Screen
      name={screenNames.NOTIFICATION_DETAILS}
      component={NotificationDetails}
    />
  </Stack.Navigator>
);

const MainTabNavigator = () => (
  <Tab.Navigator tabBarOptions={TAP_BAR_OPTIONS}>
    <Tab.Screen
      name={screenNames.EVENTS_LIST_SCREEN}
      component={EventsListScreen}
      options={{ tabBarIcon: CalendarIcon }}
    />
    <Tab.Screen
      name={screenNames.NOTIFICATIONS_LIST}
      component={NotificationList}
      options={{ tabBarIcon: RingIcon }}
    />
    <Tab.Screen
      name={screenNames.DEPARTMENT_SWITCHBORARD}
      component={DepartmentSwitchboardScreen}
      options={{ tabBarIcon: GraduateCupIcon }}
    />
    <Tab.Screen
      name={screenNames.ANNIVERSARY_CALENDAR_LIST_SCREEN}
      component={AnniversaryCalendarListScreen}
      options={{ tabBarIcon: AnniversaryIcon }}
    />

  </Tab.Navigator>
);
