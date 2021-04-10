import { StyleSheet, Text, View, Pressable } from 'react-native';
import NavArrowIcon from '../../assets/svg/nav-arrow.svg';
import { GS_BOLD } from '../constants/fonts';
import React from 'react';

const DEFAULT_TITLE = 'Undefined title';

const AppHeader = ({ scene, navigation, insets, previous }) => {
  const { title = DEFAULT_TITLE } = scene.descriptor.options;

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Pressable
        style={styles.goBackButton}
        android_ripple={{ color: '#00000010' }}
        disabled={!previous}
        onPress={navigation.goBack}
      >
        {!!previous && <NavArrowIcon style={styles.navArrowIcon} />}
        <Text style={styles.titleText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 19,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 19,
  },
  navArrowIcon: {
    marginRight: 17,
  },
  titleText: {
    marginVertical: 26,
    fontFamily: GS_BOLD,
    fontSize: 16,
    lineHeight: 19,
  },
});

export default AppHeader;
