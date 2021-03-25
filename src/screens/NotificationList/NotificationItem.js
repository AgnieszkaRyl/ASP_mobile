import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { BLUE_ASP, ORANGE_ASP, GREY_ASP } from '../../constants/colors';

export default function NotificationItem({ item }) {
  return (
    <View style={[styles.item, item.is_important && styles.important]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.contentText}>{item.short_description}</Text>
      <Text style={styles.date}>
        {moment(item.published_at).format('DD/MM/YYYY, HH:mm')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  important: {
    borderLeftColor: ORANGE_ASP,
  },
  item: {
    flex: 1,
    marginTop: 15,
    padding: 30,
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderLeftWidth: 10,
    borderLeftColor: BLUE_ASP,
    marginLeft: 15,
    marginRight: 15,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontFamily: 'gs-bold',
  },
  contentText: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: 'gs-regular',
  },
  uptext: {
    marginTop: 50,
  },
  date: {
    marginTop: 10,
    color: GREY_ASP,
    fontSize: 10,
  },
});
