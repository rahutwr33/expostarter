import React, { Component } from 'react';
import {
      StyleSheet,
      Image,
      View
} from 'react-native' ;
 
const splashImage = require("./splash.png");
export default class Splash extends React.Component {
  constructor(props){
      super(props)
  }
componentWillMount(){
  setTimeout(() => {
    this.props.navigation.navigate('Login',null,null)
  }, 1000);
}

  render(){
    return(
      <View style={styles.container}>
         <Image source={splashImage} style={styles.splash}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  splash: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'stretch',
    marginLeft:10
  }
})

