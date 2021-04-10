import AnniversaryCalendarListScreen from './src/screens/anniversary_calendar/AnniversaryCalendarListScreen';
import DepartmentSwitchboard from './src/screens/DepartmentSwitchboard/DepartmentSwitchboard';
import NotificationDetails from './src/screens/NotificationDetails/NotificationDetails';
import NotificationList from './src/screens/NotificationList/NotificationList';
import { DETAILS_TRANSITION_CONFIG } from './src/constants/screenTransitions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TAP_BAR_OPTIONS } from './src/constants/tabBarOptions';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventsList from './src/screens/EventsList';
import GraduateCupIcon from './assets/svg/graduate-cup.svg';
import * as screenNames from './src/constants/screenNames';
import AnniversaryIcon from './assets/svg/anniversary.svg';
import { StorageProvider } from './src/services/storage';
import { DefaultTheme } from '@react-navigation/native';
import CalendarIcon from './assets/svg/calendar.svg';
import AppHeader from './src/components/AppHeader';
import RingIcon from './assets/svg/ring.svg';
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

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

export default function App() {
  const [areFontsLoaded] = useFonts(fonts);

  if (!areFontsLoaded) {
    return <AppLoading />;
  }
  return (
    <StorageProvider>
      <NavigationContainer theme={theme}>
        <StatusBar style="auto" />
        <MainTabNavigator />
      </NavigationContainer>
    </StorageProvider>
  );
}

const MainTab = createBottomTabNavigator();
const MainTabNavigator = () => (
  <MainTab.Navigator tabBarOptions={TAP_BAR_OPTIONS}>
    <MainTab.Screen
      name={screenNames.EVENTS_NAVIGATOR}
      component={EventsStackNavigator}
      options={{ tabBarIcon: CalendarIcon }}
    />
    <MainTab.Screen
      name={screenNames.NOTIFICATIONS_NAVIGATOR}
      component={NotificationsStackNavigator}
      options={{ tabBarIcon: RingIcon }}
    />
    <MainTab.Screen
      name={screenNames.DEPARTMENT_SWITCHBOARD_NAVIGATOR}
      component={DepartmentSwitchboardStackNavigator}
      options={{ tabBarIcon: GraduateCupIcon }}
    />
    <MainTab.Screen
      name={screenNames.ANNIVERSARY_NAVIGATOR}
      component={AnniversaryStackNavigator}
      options={{ tabBarIcon: AnniversaryIcon }}
    />
  </MainTab.Navigator>
);

const EventsStack = createStackNavigator();
const EventsStackNavigator = () => (
  <EventsStack.Navigator
    screenOptions={{
      title: 'wydarzenia',
      header: props => <AppHeader {...props} />,
      ...DETAILS_TRANSITION_CONFIG,
    }}
  >
    <EventsStack.Screen name={screenNames.EVENTS_LIST} component={EventsList} />
  </EventsStack.Navigator>
);

const NotificationsStack = createStackNavigator();
const NotificationsStackNavigator = () => (
  <NotificationsStack.Navigator
    screenOptions={{
      title: 'komunikaty',
      header: props => <AppHeader {...props} />,
      ...DETAILS_TRANSITION_CONFIG,
    }}
  >
    <NotificationsStack.Screen
      name={screenNames.NOTIFICATIONS_LIST}
      component={NotificationList}
    />
    <NotificationsStack.Screen
      name={screenNames.NOTIFICATION_DETAILS}
      component={NotificationDetails}
    />
  </NotificationsStack.Navigator>
);

const DepartmentSwitchboardStack = createStackNavigator();
const DepartmentSwitchboardStackNavigator = () => (
  <DepartmentSwitchboardStack.Navigator
    screenOptions={{
      title: 'władze wydziału',
      header: props => <AppHeader {...props} />,
      ...DETAILS_TRANSITION_CONFIG,
    }}
  >
    <DepartmentSwitchboardStack.Screen
      name={screenNames.DEPARTMENT_SWITCHBOARD}
      component={DepartmentSwitchboard}
    />
  </DepartmentSwitchboardStack.Navigator>
);

const AnniversaryStack = createStackNavigator();
const AnniversaryStackNavigator = () => (
  <AnniversaryStack.Navigator
    screenOptions={{
      title: 'kalendarium',
      header: props => <AppHeader {...props} />,
      ...DETAILS_TRANSITION_CONFIG,
    }}
  >
    <MainTab.Screen
      name={screenNames.ANNIVERSARY_CALENDAR_LIST_SCREEN}
      component={AnniversaryCalendarListScreen}
    />
  </AnniversaryStack.Navigator>
);
