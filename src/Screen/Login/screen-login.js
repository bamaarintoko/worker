import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View, TouchableWithoutFeedback, StatusBar, Image
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Badge } from 'native-base';
import { InputReg } from '../../Components/Input';
import { Btn } from '../../Components/Button';
import { actLogin } from './action';
import md5 from 'crypto-js/md5';
import { secure, normalizeFont, normalize } from '../../Utils/func';
import { LOGIN_RESET } from '../../Utils/Constant';


class ScreenLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRedLogin: true,
            email: "",
            password: "",
            isLoginSucces: false,
            isLoginError: false,
            message: ""
        }

    }
    login() {
        let params = {
            email: this.state.email,
            password: secure(this.state.password)
        }
        this.props.dispatch(actLogin(params))
    }
    onChange = (key) => {
        return (e) => {
            var state = {};
            state[key] = e
            this.setState(state)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.initialRedLogin === this.props.redAuth.status) {
            if (this.props.redAuth.status_get) {
                this.setState({
                    isLoginSucces: true,
                    isLoginError: false
                })
                this.props.dispatch({ type: 'HOME' })
            } else {
                this.setState({
                    isLoginSucces: false,
                    isLoginError: true,
                    message: "Login gagal. Cek email dan password"
                })
                this.props.dispatch({ type: LOGIN_RESET })
            }
        }
        // console.log("--->", this.props.redAuth)
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#4FC3F7"
                    barStyle="light-content" />
                {/* <Content> */}
                <View style={{ flex: 1, flexDirection: "column" }}>
                    <View style={{ margin: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{
                            flex: 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                                style={{ width: normalize(130 * .9) }}
                                source={require('../../Assets/logo.png')}
                                resizeMode={"contain"}
                            />
                            
                        </View>
                        <View style={{
                            flex: 2,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Image
                            style={{ height: 50 }}
                            source={require('../../Assets/logotext.png')}
                            resizeMode={"contain"}
                        />
                            
                        </View>

                        
                    </View>
                    <View style={{ flex: 1 }}>

                        <InputReg autoCapitalize={"none"} onChangeText={this.onChange("email")} placeholder={"Email"} />
                        <InputReg autoCapitalize={"none"} secureTextEntry={true} onChangeText={this.onChange("password")} placeholder={"Password"} />
                        {
                            this.state.isLoginError &&
                            <View style={styles.error_message}>
                                <Text style={{ color: 'white' }}>{this.state.message}</Text>
                            </View>
                        }

                        <Btn onPress={() => this.login()} text={"Login"} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 40, marginLeft: 10, marginRight: 10 }}>
                            <TouchableWithoutFeedback
                                onPress={() => this.props.navigation.navigate('Register')}>
                                <View style={{ flex: 1, height: 40, justifyContent: 'center' }}>
                                    <Text style={{ color: '#000000', fontSize: normalizeFont(4 * .5) }}>Create
                        Account</Text>

                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback style={{ paddingTop: 10, paddingBottom: 10 }}
                                onPress={() => console.log("asu")}>
                                <View style={{ flex: 1, alignItems: 'flex-end', height: 40, justifyContent: 'center' }}>
                                    <Text style={{ color: '#000000', fontSize: normalizeFont(4 * .5) }}>Forgot
                        Password?</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>


                {/* </Content> */}
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    error_message: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        backgroundColor: '#FFD54F'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
function mapStateToProps(state) {
    return {
        redAuth: state.redAuth
    };
}
export default connect(
    mapStateToProps,
)(ScreenLogin);