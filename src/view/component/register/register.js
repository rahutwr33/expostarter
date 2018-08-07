import React from 'react'
import {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
    BackHandler,
    Dimensions
} from 'react-native';
import {
    Button,
    Input,
    Item
} from 'native-base';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const error = {};
    error.fullname = '';
    error.email = '';
    error.name = '';

    var fullname = values.fullname;
    var email = values.email;
    var password = values.password;
    if (values.fullname === undefined) {
        fullname = '';
    }
    if (values.email === undefined) {
        email = '';
    }
    if (values.password === undefined) {
        password = '';
    }

    if (email.length < 8 && email !== '') {
        error.email = 'too short';
    }

    if (!email.includes('@') && email !== '') {
        error.email = '@ not included';
    }
    if (password.length > 8) {
        error.password = 'max 8 characters';
    }
    return error;
};
class Register extends React.Component {
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
    renderInput({ input, label, type, meta: { touched, error, warning } }) {

        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }

        return (
            <Item error={hasError}>
                <Input
                    placeholder={input.name == 'email' ? 'Email' : input.name == 'fullname' ? 'Full Name' : 'Password'}
                    {...input }
                    style={{ fontFamily: 'sans-serif-medium' }}
                />
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
    }

    handleClick = () =>{
        this.props.navigation.navigate('Login',null,null)
    }

    render() {
        const { handleSubmit, reset } = this.props;

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
                            <Field name="fullname" component={this.renderInput} />
                            <Field name="email" component={this.renderInput} />
                            <Field name="password" component={this.renderInput} />
                           
                            <Button block danger style={styles.loginbutton}>
                                <Text style={styles.loginbtnStyle}>Register</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                
                <View style={styles.bottomtext}>
                    <View style={styles.createaccount}>
                        <Text style={styles.createaccounttext}>Already have Account : </Text>
                        <TouchableOpacity onPress={this.handleClick} >
                        <Text style={styles.linktext}>Login</Text>
                        </TouchableOpacity>
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
        backgroundColor: 'white',
        height: 230,

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

export default reduxForm({
    form: 'register',
    validate
})(Register);

