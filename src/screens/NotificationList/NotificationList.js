import { Button, FlatList, StyleSheet, View } from 'react-native';
import { useStorage } from '../../services/storage';
import NotificationItem from './NotificationItem';
import React from 'react';
import * as screenNames from '../../constants/screenNames';

export default function NotificationList({ navigation }) {
  const { notifications } = useStorage(); //wyciągamy notifications z useStorage
  //const funcjionArrow = () => 2; //krótka funckja która zwróci 2 nie musi być {}

  return (
    <>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        data={notifications}
        keyExtractor={item => String(item.id)} //każdy element na liście potrzebuje key, przypisujemy je w ten sposób; key musi być stringiem
        renderItem={(
          { item: notification } //przemianowanie item na notification
        ) => (
          <NotificationItem
            item={notification}
            onPress={() =>
              navigation.navigate(screenNames.NOTIFICATION_DETAILS, {
                notification: notification,
              })
            }
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingBottom: 20,
  },
});
