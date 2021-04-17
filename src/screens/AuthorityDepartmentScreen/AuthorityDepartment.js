import { StyleSheet, ScrollView } from 'react-native';
import { useStorage } from '../../services/storage';
import React from 'react';
import DepartmentAthorityIcon from '../../../assets/svg/department_authority.svg';
import RowAuthority from './RowAuthority';
import StripeSwitchBoard from '../../constants/StripeSwitchBoard';
import { findImageUriWithBestQuality } from '../../utils/imagesHelpers';

export default function AuthorityDepartment() {
  const { facultyStuff } = useStorage();
  return (
    <ScrollView>
      <StripeSwitchBoard
        title={'władze wydziału'}
        IconPrep={DepartmentAthorityIcon}
      />

      {facultyStuff.heads_of_departments.map(item => (
        <RowAuthority
          key={item.id}
          title={item.title_pl}
          email={item.email}
          subtitle={item.full_name_pl}
          photoUri={findImageUriWithBestQuality(item)}
        />
      ))}

      <StripeSwitchBoard
        title="kierownicy katedr"
        isBlue={true}
        IconPrep={DepartmentAthorityIcon}
      />
      {facultyStuff.faculty_authorities.map(item => (
        <RowAuthority
          key={item.id}
          title={item.title_pl}
          email={item.email}
          subtitle={item.full_name_pl}
          isBlueStripe={true}
          photoUri={findImageUriWithBestQuality(item)}
        />
      ))}
    </ScrollView>
  );
}
