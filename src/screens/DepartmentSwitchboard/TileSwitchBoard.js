import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { GS_BOLD } from '../../constants/fonts';
import { BLUE_ASP, ORANGE_ASP } from '../../constants/colors';

export default function TileSwitchBoard({ title, IconPrep, isBlue }) {
  return (
    <View style={styles.tileContainer}>
      <Pressable
        style={[styles.tile, isBlue && styles.blueBackgroundTile]}
        android_ripple={{ color: '#00000010' }}
      >
        <IconPrep style={styles.icon} />
        <Text style={styles.tileText}>{title}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  tileContainer: {
    width: '50%',
    aspectRatio: 1,
    padding: 5,
  },
  tile: {
    width: '100%',
    height: '100%',
    backgroundColor: ORANGE_ASP,
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  tileText: {
    fontSize: 15,
    fontFamily: GS_BOLD,
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    width: '60%',
    aspectRatio: 1,
    color: 'white',
  },
  blueBackgroundTile: {
    backgroundColor: BLUE_ASP,
  },
});
