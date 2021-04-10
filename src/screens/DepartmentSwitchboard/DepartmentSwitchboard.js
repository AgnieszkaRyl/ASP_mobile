import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { GS_BOLD } from '../../constants/fonts';
import { GREY_ASP } from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import ContactIcon from '../../../assets/svg/contact.svg';
import DepartmentAthorityIcon from '../../../assets/svg/department_authority.svg';
import ArtMediaIcon from '../../../assets/svg/art_media.svg';
import GraphicsDesignIcon from '../../../assets/svg/graphics_design.svg';
import ArtisticGraphics from '../../../assets/svg/atristic_graphics.svg';
import Schedule from '../../../assets/svg/schedule.svg';
import TileSwitchBoard from './TileSwitchBoard';

export default function DepartmentSwitchboard() {
  return (
    <View style={styles.whiteBackground}>
      <ScrollView style={styles.mainScrollView}>
        <Text style={styles.sectionTitle}>plany zajęć</Text>
        <View style={styles.sectionTitleTiles}>
          <TileSwitchBoard
            title="plan zajęć"
            IconPrep={Schedule}
            isBlue={false}
          />
        </View>
        <Text style={styles.sectionTitle}>wydział</Text>
        <View style={styles.sectionTitleTiles}>
          <View style={styles.row}>
            <TileSwitchBoard
              title="władze wydziału"
              IconPrep={DepartmentAthorityIcon}
              isBlue={false}
            />
            <TileSwitchBoard
              title="kontakt"
              IconPrep={ContactIcon}
              isBlue={false}
            />
          </View>
        </View>
        <Text style={styles.sectionTitle}>katedry</Text>
        <View style={styles.sectionTitleTiles}>
          <View style={styles.row}>
            <TileSwitchBoard
              title="grafiki artystycznej"
              IconPrep={ArtisticGraphics}
              isBlue={true}
            />
            <TileSwitchBoard
              title="projektowania graficznego"
              IconPrep={GraphicsDesignIcon}
              isBlue={true}
            />
          </View>
          <View style={styles.row}>
            <TileSwitchBoard
              title="sztuki mediów"
              IconPrep={ArtMediaIcon}
              isBlue={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteBackground: {
    backgroundColor: 'white',
  },
  mainScrollView: {
    backgroundColor: 'white',
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
  },
});
