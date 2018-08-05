import { createStackNavigator } from 'react-navigation';
import Register from './view/component/register/register'
import Login from './view/component/login/login'
import Splash  from './view/component/splash/splah'
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
                                  // headerStyle:{ 
                                  //   alignItems: 'center',
                                  //   justifyContent: 'center',
                                  // },
                                },
                              },
                              Register: {
                                screen: Register,
                                navigationOptions: {
                                  title: 'Register' 
                                },
                              },
                             
                       },
                       {
                         initialRouteName : 'Splash'
                       }
                      );