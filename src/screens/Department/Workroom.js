import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React from 'react';
import { GREY_ASP, ORANGE_ASP, LIGHT_GREY_ASP } from '../../constants/colors';
import StripeSwitchBoard from '../../components/StripeSwitchBoard';
import { GS_BOLD, GS_REGULAR } from '../../constants/fonts';
import { findImageUriWithBestQuality } from '../../utils/imagesHelpers';
import RowAuthority from '../AuthorityFacultyScreen/RowAuthority';
import { useStorage } from '../../services/storage';
import GraphicsDesignIcon from '../../../assets/svg/graphics_design.svg';
import ArtMediaIcon from '../../../assets/svg/art_media.svg';
import ArtisticGraphics from '../../../assets/svg/atristic_graphics.svg';
import MarkdownASP from '../../components/MarkdownASP';

export default function Workroom({ route }) {
  const { workroom } = route.params;
  const { iconPrepWorkroom } = route.params;
  const icons = {
    computer_mouse: GraphicsDesignIcon,
    laptop: ArtMediaIcon,
    paintbrush: ArtisticGraphics,
  };
  const { workrooms } = useStorage();
  const digit = workroom.id - 1;
  const { workers } = workrooms[digit];

  return (
    <ScrollView style={stylesWoorkroom.fillAll}>
      <View>
        <StripeSwitchBoard
          title={workroom.title_pl}
          IconPrep={iconPrepWorkroom}
          isBlue
        />
        <View
          style={[
            stylesWoorkroom.containerNoBorder,
            stylesWoorkroom.centerPhoto,
          ]}
        >
          <Image
            style={stylesWoorkroom.photo}
            source={{ uri: findImageUriWithBestQuality(workroom) }}
          />
        </View>
        <View style={stylesWoorkroom.container}>
          <Text
            style={[stylesWoorkroom.sectionTitle, stylesWoorkroom.extraPadding]}
          >
            OPIS
          </Text>
          <MarkdownASP text={workroom.description_pl} />
        </View>
        {workroom.text_sections.map(textSection => (
          <View
            style={[stylesWoorkroom.container, stylesWoorkroom.bottomBorder]}
          >
            <Text
              style={[
                stylesWoorkroom.sectionTitle,
                stylesWoorkroom.extraPadding,
              ]}
            >
              {textSection.title_pl}
            </Text>
            <MarkdownASP text={textSection.text_pl} />
          </View>
        ))}
        <View>
          <Text
            style={[
              stylesWoorkroom.sectionTitle,
              stylesWoorkroom.containerNoBorder,
            ]}
          >
            Pracownicy
          </Text>
          {workers.map(worker => (
            <RowAuthority
              photoUri={findImageUriWithBestQuality(worker)}
              title={worker.position_pl}
              subtitle={worker.full_name_pl}
              email={worker.email}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const stylesWoorkroom = StyleSheet.create({
  container: {
    marginLeft: 19,
    marginRight: 19,
    borderBottomWidth: 2,
    borderBottomColor: LIGHT_GREY_ASP,
    paddingBottom: 30,
  },
  containerNoBorder: {
    paddingLeft: 19,
    paddingRight: 19,
    marginBottom: 20,
  },
  sectionTitle: {
    textTransform: 'uppercase',
    paddingTop: 20,
    color: GREY_ASP,
    fontSize: 16,
    fontFamily: GS_BOLD,
  },
  extraPadding: {
    //potrzebny ze wzgledu na sekcje pracownikow ponizej sa kafelki które maja juz swoj padding
    paddingBottom: 19,
  },
  sectionText: {
    fontSize: 14,
    fontFamily: GS_REGULAR,
  },
  photo: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  centerPhoto: {
    width: '100%',
    aspectRatio: 1.5,
    marginTop: 19,
  },
});
