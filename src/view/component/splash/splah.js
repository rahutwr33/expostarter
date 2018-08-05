import React, { Component } from 'react';
import {
      StyleSheet,
      Image
} from 'react-native' ;
 
const splashImage = require("./splash.jpg");
export const Splash = (props) => {

  setTimeout(() => {
    props.navigation.navigate('Login',null,null)
  }, 1000);
  return(
    <Image source={splashImage} style={styles.splash}/>
  )
}

const styles = StyleSheet.create({
  splash: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'stretch',
    width:410
  }
})

