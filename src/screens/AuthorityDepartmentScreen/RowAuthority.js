import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { BLUE_ASP, ORANGE_ASP } from '../../constants/colors';
import { GS_BOLD, GS_REGULAR } from '../../constants/fonts';

export default function RowAuthority({
  onPress,
  title,
  subtitle,
  email,
  isBlueStripe,
  photoUri,
}) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: photoUri }} style={styles.photo} />
      <View style={styles.rightSideRow}>
        <View style={[styles.shortStripe, isBlueStripe && styles.blueStripe]} />
        <Text style={styles.rowPersonTitle}>{title}</Text>
        <Text style={styles.rowPersonName}>{subtitle}</Text>
        <Text style={styles.rowPersonEmail}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: '35%',
    aspectRatio: 1,
  },
  row: {
    margin: 19,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowPersonName: {
    fontFamily: GS_REGULAR,
    fontSize: 14,
  },
  rowPersonTitle: {
    fontFamily: GS_BOLD,
    fontSize: 17,
  },
  rightSideRow: {
    paddingLeft: 19,
    flex: 1,
  },
  shortStripe: {
    backgroundColor: ORANGE_ASP,
    height: 7,
    width: 74,
    marginBottom: 5,
  },
  blueStripe: {
    backgroundColor: BLUE_ASP,
  },
  rowPersonEmail: {
    fontFamily: GS_REGULAR,
    fontSize: 14,
    position: 'absolute',
    bottom: 0,
    paddingLeft: 19,
    color: ORANGE_ASP,
  },
});
