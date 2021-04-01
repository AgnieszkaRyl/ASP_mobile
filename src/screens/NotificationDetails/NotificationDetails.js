import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import React from 'react';
import moment from 'moment';
import { GS_BOLD, GS_REGULAR } from '../../constants/fonts';
import {
  BLUE_ASP,
  ORANGE_ASP,
  GREY_ASP,
  LIGHT_GREY_ASP,
} from '../../constants/colors';
import ShareIcon from '../../../assets/svg/share.svg';

export default function NotificationDetails({ route }) {
  const { itemId } = route.params;
  const AppButton = ({ title }) => (
    <Pressable style={styles.appButtonContainer}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <ShareIcon width={30} height={30} color="#ffffff" />
        <Text style={styles.appButtonText}>{title}</Text>
      </View>
    </Pressable>
  );

  return (
    <ScrollView
      style={styles.whiteBackground}
      contentContainerStyle={[styles.contentContainerStyleForScrollView]}
    >
      <View
        style={[
          styles.mainView,
          itemId.is_important == true && styles.importantNotification,
        ]}
      >
        <Text style={styles.title}>{itemId.title}</Text>
        <Text style={styles.shortDescription}>{itemId.short_description}</Text>
        <Text style={styles.date}>
          {moment(itemId.published_at).format('DD/MM/YYYY, HH:mm')}
        </Text>
        <Text style={styles.longDescription}>{itemId.long_description}</Text>
      </View>
      <AppButton title="Udostępnij" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainerStyleForScrollView: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  appButtonContainer: {
    backgroundColor: BLUE_ASP,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: GS_REGULAR,
    justifyContent: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  importantNotification: {
    borderTopColor: ORANGE_ASP,
  },
  mainView: {
    paddingTop: 10,
    marginTop: 15,
    borderTopColor: BLUE_ASP,
    borderTopWidth: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: GS_BOLD,
  },
  shortDescription: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: GS_REGULAR,
  },
  date: {
    marginTop: 10,
    color: GREY_ASP,
    fontSize: 10,
    fontFamily: GS_REGULAR,
    paddingBottom: 10,
    borderBottomColor: LIGHT_GREY_ASP,
    borderBottomWidth: 2,
  },
  longDescription: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: GS_REGULAR,
  },
});
