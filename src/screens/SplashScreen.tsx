import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Animated, StyleSheet} from 'react-native';

type Props = {
  AppIsReady: boolean;
  children: React.ReactNode;
};

enum Animation {
  LoadingImage,
  FadeInImage,
  WaitForApp,
  FadeOut,
  Hidden,
}

const SplashScreen = ({children, AppIsReady}: Props) => {
  return (
    <>
      {AppIsReady && children}
      <Splash AppIsReady={AppIsReady} />
    </>
  );
};

const Splash = ({AppIsReady}: {AppIsReady: boolean}) => {
  const containerOpacity = useRef(new Animated.Value(1)).current;
  const imageOpacity = useRef(new Animated.Value(0)).current;
  const [state, setState] = useState<Animation>(Animation.LoadingImage);

  useEffect(() => {
    if (state === Animation.FadeInImage) {
      Animated.timing(imageOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setState(Animation.WaitForApp);
      });
    }
  }, [imageOpacity, state]);
  useEffect(() => {
    if (state === Animation.WaitForApp) {
      if (AppIsReady) {
        setState(Animation.FadeOut);
      }
    }
  }, [AppIsReady, state]);
  useEffect(() => {
    if (state === Animation.FadeOut) {
      Animated.timing(containerOpacity, {
        toValue: 0,
        duration: 1000,
        delay: 1000,
        useNativeDriver: true,
      }).start(() => {
        setState(Animation.Hidden);
      });
    }
  }, [containerOpacity, state]);

  if (state === Animation.Hidden) {
    return null;
  }

  return (
    <Animated.View
      collapsable={false}
      style={[style.container, {opacity: containerOpacity}]}>
      <Animated.Image
        source={require('../assets/back.png')}
        fadeDuration={0}
        resizeMode={'contain'}
        onLoad={() => setState(Animation.FadeInImage)}
        style={[style.image, {opacity: imageOpacity}]}
      />
      <ActivityIndicator size={40} color={'#5E81AC'} style={style.indicator} />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#D08770',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  indicator: {
    position: 'absolute',
    top: '50%',
    bottom: '50%',
    right: '50%',
    left: '50%',
  },
});
export default SplashScreen;
