import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const Background = ({ children }) => {
  return (
    <ImageBackground 
      source={require('../assets/images/background-telas.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Background;