import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Styles';
export default function SimpleLottie(props) {
  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.delete} onPress={props?.onPress}>
        <Image
          style={styles.deleteIcon}
          source={require('../../../../img/pngs/delete.png')}
        />
      </TouchableOpacity>
      <Text style={styles.merci}>Merci de patienter</Text>
      <LottieView
        source={require('../../../../img/pngs/97618-loading-green-gradient.json')}
        style={styles.animation}
        autoPlay
        speed={0.5}
        //duration={1500}
        progress={animationProgress.current}
        loop
      />
    </View>
  );
}
