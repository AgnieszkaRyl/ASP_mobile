import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { ORANGE_ASP, GREEN_ASP } from '../../constants/colors';
import React, { useState } from 'react';
import { checkEven, checkFourth } from '../../utils/numbersHelpers';
import { findImageUriWithBestQuality } from '../../utils/imagesHelpers';

const AnniversaryCalendarItem = props => {
  const [isOpened, setIsOpened] = useState(null);

  return (
    <Pressable
      android_ripple={{ color: '#00000010' }}
      onPress={() => {
        setIsOpened(props.index === isOpened ? null : props.index);
      }}
    >
      <View
        style={{
          paddingHorizontal: 19,
          backgroundColor: checkEven(props.index + 1)
            ? checkFourth(props.index + 1)
              ? ORANGE_ASP
              : GREEN_ASP
            : 'white',
        }}
      >
        <View
          style={[
            styles.yearAndLine,
            {
              flexDirection: props.index === isOpened ? 'column' : 'row',
              marginBottom: props.index === isOpened ? 23 : 0,
            },
          ]}
        >
          <View
            style={[
              styles.shortLine,
              {
                backgroundColor: checkFourth(props.index + 1)
                  ? 'white'
                  : props.index === isOpened
                  ? checkEven(props.index + 1)
                    ? 'black'
                    : ORANGE_ASP
                  : 'black',
                width: props.index === isOpened ? '100%' : 93.83,
              },
            ]}
          ></View>
          <Text
            style={[
              styles.eachYear,
              {
                color: checkFourth(props.index + 1) ? 'white' : 'black',
              },
            ]}
          >
            {props.post.year}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: findImageUriWithBestQuality(props.post),
            }}
            style={styles.image}
          ></Image>
        </View>
        {props.index === isOpened && (
          <View
            style={{
              overflow: 'hidden',
            }}
          >
            <Text style={styles.description}>{props.post.description}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 163,
    marginBottom: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    aspectRatio: 2.05,
    width: '100%',
  },
  yearAndLine: {
    height: 67,
    justifyContent: 'space-between',
  },
  shortLine: {
    height: 7.57,
    marginTop: 23,
  },
  eachYear: {
    marginTop: 15,
    fontFamily: 'gs-bold',
    fontSize: 16,
  },
  description: {
    fontFamily: 'gs-medium',
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'left',
    letterSpacing: 0.7,
    lineHeight: 17,
  },
});

export default AnniversaryCalendarItem;
