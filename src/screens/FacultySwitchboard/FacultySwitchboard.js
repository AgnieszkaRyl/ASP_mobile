import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { GS_BOLD } from '../../constants/fonts';
import { GREY_ASP } from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import ContactIcon from '../../../assets/svg/contact.svg';
import DepartmentAuthorityIcon from '../../../assets/svg/faculty_authority.svg';
import ArtMediaIcon from '../../../assets/svg/art_media.svg';
import GraphicsDesignIcon from '../../../assets/svg/graphics_design.svg';
import ArtisticGraphics from '../../../assets/svg/atristic_graphics.svg';
import Schedule from '../../../assets/svg/schedule.svg';
import TileSwitchboard from './TileSwitchboard';
import * as screenNames from '../../constants/screenNames';
import { useStorage } from '../../services/storage';

export default function FacultySwitchboard({ navigation }) {
  //utworzyc stala obiekt i kazdy pro
  const { departments } = useStorage();
  const icons = {
    computer_mouse: GraphicsDesignIcon,
    laptop: ArtMediaIcon,
    paintbrush: ArtisticGraphics,
  };
  return (
    <View>
      <ScrollView style={styles.mainScrollView}>
        <Text style={styles.sectionTitle}>plany zajęć</Text>
        <View style={styles.sectionTitleTiles}>
          <TileSwitchboard title="plan zajęć" IconPrep={Schedule} />
        </View>
        <Text style={styles.sectionTitle}>wydział</Text>
        <View style={styles.sectionTitleTiles}>
          <View style={styles.row}>
            <TileSwitchboard
              title="władze wydziału"
              IconPrep={DepartmentAuthorityIcon}
              onPress={() =>
                navigation.navigate(screenNames.AUTHORITY_DEPARTMENT)
              }
            />
            <TileSwitchboard title="kontakt" IconPrep={ContactIcon} />
          </View>
        </View>
        <Text style={styles.sectionTitle}>katedry</Text>
        <View style={styles.sectionTitleTiles}>
          {departments.map(department => (
            <TileSwitchboard
              title={department.name_pl}
              IconPrep={icons[department.icon]}
              isBlue={true}
              onPress={() =>
                navigation.navigate(screenNames.ARTISTIC_GRAPHICS, {
                  department: department,
                })
              }
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScrollView: {
    paddingLeft: 14,
    paddingRight: 14,
  },
  sectionTitle: {
    fontFamily: GS_BOLD,
    fontSize: 20,
    color: GREY_ASP,
    marginLeft: 5,
    marginTop: 15,
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitleTiles: {
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
