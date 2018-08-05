import React from 'react'
import {
View,
Text,
BackHandler
}from 'react-native';
export default class Login extends React.Component {
    constructor(props){
        super(props)
    }
componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', function() {
        if (!this.onMainScreen()) {
          this.goBack();
          return true;
        }
        return false;
      });
}

   render(){
    return(
        <View>
            <Text>awjdhajwkd</Text>
        </View>
     )
   }
   
}
