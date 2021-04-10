import React, { useMemo } from 'react';
import { ScrollView } from 'react-native';
import { useStorage } from '../../services/storage';
import AnniversaryCalendarItem from './AnniversaryCalendarItem';

const AnniversaryCalendar = () => {
  const { anniversaryPosts } = useStorage();

  const sortedAnniversaryPosts = useMemo(
    () =>
      anniversaryPosts.sort((first, second) =>
        first.year > second.year ? 1 : -1
      ),
    [anniversaryPosts]
  );

  return (
    <ScrollView>
      {sortedAnniversaryPosts.map((post, index) => (
        <AnniversaryCalendarItem key={post.id} post={post} index={index} />
      ))}
    </ScrollView>
  );
};

export default AnniversaryCalendar;
