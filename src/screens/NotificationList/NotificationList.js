import { FlatList, StyleSheet } from 'react-native';
import { useStorage } from '../../services/storage';
import NotificationItem from './NotificationItem';
import React from 'react';

export default function NotificationList() {
  const { notifications } = useStorage();
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={notifications}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <NotificationItem item={item} />}
    />
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
