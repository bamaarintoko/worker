import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { Image, View } from 'react-native';
import Head from '../../Components/Head';
import { InputReg } from '../../Components/Input';
import { Btn } from '../../Components/Button';
import md5 from 'crypto-js/md5';
import { secure } from '../../Utils/func';
import { REGISTER_RESET } from '../../Utils/Constant';
import StatusBarAlert from 'react-native-statusbar-alert'
import { actRegister } from './action';
function mapStateToProps(state) {
    return {
        redRegister: state.redRegister
    };
}

class ScreenRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value_name: '',
            value_email: '',
            value_password: '',
            retype_password: '',
            initialRedRegister: true,
            isAddSuccess: false,
            isAddFailed: false,
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.initialRedRegister === this.props.redRegister.status) {
            console.log(this.props.redRegister)
            if (this.props.redRegister.status_add) {
                this.setState({
                    isAddSuccess: true,
                    isAddFailed: false,
                    value_name: '',
                    value_email: '',
                    value_password: '',
                    retype_password: '',
                })
            } else {
                this.setState({
                    isAddSuccess: false,
                    isAddFailed: true
                })
            }
            this.props.dispatch({ type: REGISTER_RESET })
        }
    }

    _onRegister = () => {
        return () => {
            if (secure(this.state.value_password === secure(this.state.retype_password))) {
                let params = {
                    email: this.state.value_email,
                    password: secure(this.state.value_password),
                    nama: this.state.value_name
                }

                this.props.dispatch(actRegister(params))
            }

        }
    }
    toggleSuccess = () => {
        return () => {
            this.setState({
                isAddSuccess: false
            })
        }
    }
    togglFailed = () => {
        return () => {
            this.setState({
                isAddFailed: false
            })
        }
    }
    onChange = (key) => {
        return (e) => {
            var state = {};
            state[key] = e
            this.setState(state)
        }
    }
    render() {
        return (
            <Container>
                <StatusBarAlert
                    message={"Register success. Tap to close"}
                    visible={this.state.isAddSuccess}
                    backgroundColor="#4FC3F7"
                    onPress={this.toggleSuccess()}
                    color="white" />
                <StatusBarAlert
                    message={"Register gagal. Tap to close"}
                    visible={this.state.isAddFailed}
                    backgroundColor="#FF6F00"
                    onPress={this.togglFailed()}
                    color="white" />
                <Head leftIcon={"arrow-left"}
                    leftPress={() => this.props.navigation.goBack()}
                />
                <View style={{ margin: 10, flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Image
                        style={{ height: 50 }}
                        source={require('../../Assets/logotext.png')}
                        resizeMode={"contain"}
                    />
                </View>
                <View style={{ flex: 3 }}>

                    <InputReg onChangeText={this.onChange('value_name')} placeholder={"Name"} value={this.state.value_name} />
                    <InputReg autoCapitalize={"none"} onChangeText={this.onChange("value_email")} placeholder={"Email"} value={this.state.value_email} />
                    <InputReg autoCapitalize={"none"} secureTextEntry={true} onChangeText={this.onChange("value_password")} placeholder={"Password"} value={this.state.value_password} />
                    <InputReg autoCapitalize={"none"} secureTextEntry={true} onChangeText={this.onChange("retype_password")} value={this.state.retype_password} placeholder={"Retype Password"} />
                    <Btn onPress={this._onRegister()} text={"Register"} />
                </View>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenRegister);