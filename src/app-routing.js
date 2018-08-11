import { createStackNavigator } from 'react-navigation';
import Register from './component/register/register'
import Login from './component/login/login'
import Splash  from './component/splash/splash'
export const Root = createStackNavigator({
                              Splash: {
                                screen: Splash,
                                navigationOptions: {
                                  header: null 
                                },
                              },
                              Login: {
                                screen: Login,
                                navigationOptions: {
                                  title: 'Login',
                                  headerTitleStyle: {
                                    textAlign:"center", 
                                    flex:0.8
                                   },
                                  
                                },
                              },
                              Register: {
                                screen: Register,
                                navigationOptions: {
                                  title: 'Register',
                                  headerTitleStyle: {
                                    textAlign:"center", 
                                    flex:0.8
                                   }, 
                                },
                              },
                             
                       },
                       {
                         initialRouteName : 'Splash'
                       }
                      );