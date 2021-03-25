import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useStorage } from '../../services/storage';
import NotificationItem from './NotificationItem';

export default function NotificationList() {
  const { notifications } = useStorage();
  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
});
