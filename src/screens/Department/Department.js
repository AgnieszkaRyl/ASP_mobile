import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { BLUE_ASP, GREY_ASP, LIGHT_GREY_ASP } from '../../constants/colors';
import StripeSwitchBoard from '../../components/StripeSwitchBoard';
import { GS_BOLD, GS_REGULAR } from '../../constants/fonts';
import RowAuthority from '../AuthorityFacultyScreen/RowAuthority';
import OpenWorkroomButton from './OpenWorkroomButton';
import { findImageUriWithBestQuality } from '../../utils/imagesHelpers';
import * as screenNames from '../../constants/screenNames';
import ArtMediaIcon from '../../../assets/svg/art_media.svg';
import GraphicsDesignIcon from '../../../assets/svg/graphics_design.svg';
import ArtisticGraphics from '../../../assets/svg/atristic_graphics.svg';

export default function Department({ navigation, route }) {
  const { department } = route.params;
  const icons = {
    computer_mouse: GraphicsDesignIcon,
    laptop: ArtMediaIcon,
    paintbrush: ArtisticGraphics,
  };
  return (
    <ScrollView>
      <StripeSwitchBoard
        title={department.name_pl}
        IconPrep={icons[department.icon]}
      />
      <Image
        source={{ uri: findImageUriWithBestQuality(department) }}
        style={styles.photoPart}
      />

      <RowAuthority
        photoUri={findImageUriWithBestQuality(department.head_of_department)}
        title={department.head_of_department.position_pl}
        subtitle={department.head_of_department.full_name_pl}
        email={department.head_of_department.email}
      />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>o katedrze</Text>
        <Text>{department.description_pl}</Text>
        <Text style={styles.sectionTitle}>pracownie</Text>

        {department.workrooms.map(item => (
          <OpenWorkroomButton
            key={item.id}
            workroom={item}
            onPress={() =>
              navigation.navigate(screenNames.WORKROOM, {
                workroom: item,
                iconPrepWorkroom: icons[department.icon],
              })
            }
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: LIGHT_GREY_ASP,
    color: GREY_ASP,
    fontSize: 16,
    fontFamily: GS_BOLD,
    paddingBottom: 20,
  },
  photoPart: {
    aspectRatio: 2.5,
    width: '100%',
  },
  container: {
    marginRight: 19,
    marginLeft: 19,
  },
  blueTile: {
    backgroundColor: BLUE_ASP,
    color: 'white',
    padding: 10,
  },
  blueTileTitle: {
    fontFamily: GS_BOLD,
    fontSize: 18,
    color: 'white',
    paddingBottom: 25,
  },
  blueTileSubtitle: {
    fontFamily: GS_REGULAR,
    fontSize: 14,
    color: 'white',
  },
});
