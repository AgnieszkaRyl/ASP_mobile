import React, { useRef, useEffect, useState } from 'react';
import { ORANGE_ASP } from '../constants/colors';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { StatusBar } from 'expo-status-bar';

const START_ANIMATION_FRAME = 0;
const END_ANIMATION_FRAME = 50;

const SplashScreen = ({ onAnimationFinish }) => {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const animationRef = useRef(null);
  useEffect(() => {
    if (animationRef.current && !isAnimationStarted) {
      animationRef.current.play(START_ANIMATION_FRAME, END_ANIMATION_FRAME);
      setIsAnimationStarted(true);
    }
  }, [animationRef.current, isAnimationStarted]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LottieView
        ref={animationRef}
        loop={false}
        source={require('../../assets/lottie/initial.json')}
        onAnimationFinish={onAnimationFinish}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ORANGE_ASP,
    justifyContent: 'center',
  },

  animation: {
    width: '100%',
  },
});

export default SplashScreen;
