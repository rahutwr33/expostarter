import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
    BackHandler,
    Dimensions,
    TextInput
} from 'react-native';
import {
    Button,
    Input,
    Item
} from 'native-base';

// const validate = values => {
//     const error = {};
//     error.email = '';
//     error.name = '';
//     var email = values.email;
//     var password = values.password;
//     if (values.email === undefined) {
//         email = '';
//     }
//     if (values.password === undefined) {
//         password = '';
//     }
//     if (email.length < 8 && email !== '') {
//         error.email = 'too short';
//     }
//     if (!email.includes('@') && email !== '') {
//         error.email = '@ not included';
//     }
//     if (password.length > 8) {
//         error.password = 'max 8 characters';
//     }
//     return error;
// };
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            if (!this.onMainScreen()) {
                this.goBack();
                return true;
            }
            return false;
        });
    }
  
    handleClick = () =>{
        this.props.navigation.navigate('Register',null,null)
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.social_button}>
                        <Button bordered style={styles.btn1}>
                            <Text style={styles.facebookstyle}>Facebbok</Text>
                        </Button>
                        <Button bordered style={styles.btn2}>
                            <Text style={styles.googlestyle}>Google</Text>
                        </Button>
                    </View>
                    <View style={styles.container2}>
                        <View style={styles.form}>
                            <Item> 
                                <Input name="email" placeholder='Email'/>
                            </Item>
                            <Item> 
                                <Input name="password"   placeholder='Password'/>
                            </Item>
                            <Button block danger style={styles.loginbutton}>
                                <Text style={styles.loginbtnStyle}>Login</Text>
                            </Button>
                            <TouchableOpacity >
                            <View style={styles.forgetPassword}>
                                <Text style={styles.forgetText}>Forgot Password </Text>
                            </View>
                            </TouchableOpacity >
                        </View>
                    </View>
                </View>
                <View style={styles.bottomtext}>
                    <View style={styles.createaccount}>
                        <Text style={styles.createaccounttext}>Create an Account : </Text>
                        <Text style={styles.linktext} onPress={this.handleClick}>Register</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    container1: {
        marginTop: 60,
    },
    social_button: {
        flexDirection: 'row',
        margin: 10
    },
    btn1: {
        flex: 0.8,
        margin: 8,
        backgroundColor: 'white',
        borderColor: 'blue',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
    },
    btn2: {
        flex: 0.8,
        margin: 8,
        backgroundColor: 'white',
        borderColor: 'red',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
    },
    facebookstyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 0,
        width: 180,
        color: 'blue',
    },
    googlestyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        width: 180,
        color: 'red',
    },
    container2: {
        marginTop: 30,
        height: 250,

    },
    form: {
        margin: 10,
        //backgroundColor: 'white',
        height: 200,

    },
    loginbutton: {
        marginTop: 20,
        backgroundColor: '#FF527B'
    },
    loginbtnStyle: {
        fontSize: 20,
        color: 'white',
        textDecorationLine: 'underline'
    },
    forgetPassword: {
        marginTop:10
    },
    forgetText: {
        textAlign: 'center',
        fontFamily: 'sans-serif-medium',
        fontSize: 15
    },
    bottomtext: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 10
    },
    createaccount: {
        flexDirection: 'row',
    },
    createaccounttext: {
        textAlign: 'center',
        fontFamily: 'sans-serif-medium',
        fontSize: 15
    },
    linktext: {
        textAlign: 'center',
        color: '#d9534f',
        fontFamily: 'sans-serif-medium',
        fontSize: 15

    }
})

export default Login;

