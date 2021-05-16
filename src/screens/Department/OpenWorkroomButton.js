import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { BLUE_ASP } from '../../constants/colors';
import { GS_BOLD, GS_REGULAR } from '../../constants/fonts';
import { useStorage } from '../../services/storage';

export default function OpenWorkroomButton({ onPress, workroom }) {
  const { workrooms } = useStorage();
  const digit = workroom.id - 1;
  const { workers } = workrooms[digit];
  return (
    <Pressable
      style={styles.blueTile}
      onPress={onPress}
      android_ripple={{ color: '#00000010' }}
    >
      <Text style={styles.blueTileTitle}>{workroom.title_pl}</Text>
      <View>
        {workers.map(worker => (
          <Text style={styles.blueTileSubtitle} key={worker.id}>
            {worker.full_name_pl}
          </Text>
        ))}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  blueTile: {
    backgroundColor: BLUE_ASP,
    color: 'white',
    padding: 20,
    marginBottom: 10,
    height: 150,
    justifyContent: 'space-between',
  },
  blueTileTitle: {
    fontFamily: GS_BOLD,
    fontSize: 16,
    color: 'white',
    paddingBottom: 25,
  },
  blueTileSubtitle: {
    fontFamily: GS_REGULAR,
    fontSize: 14,
    color: 'white',
    bottom: 0,
  },
});
