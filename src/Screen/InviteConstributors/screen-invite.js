import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content} from 'native-base';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Head from '../../Components/Head';
import {InputReg} from '../../Components/Input';
import {Btn} from '../../Components/Button';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Api from '../../Utils/Api';
import {actInvite} from './action';
import {GET_INVITE, GET_INVITE_RESET} from '../../Utils/Constant';
import {normalizeFont} from "../../Utils/func";
import ScreenQrCode from "./screen-qr-code";

function mapStateToProps(state) {
    return {
        redAuth: state.redAuth,
        redGetInvite: state.redGetInvite
    };
}

let data_ = [];

class ScreenInvite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value_email: "",
            query: '',
            initialRedGetInvite: true
        }
    }

    onInvite = () => {
        return () => {
            let params = {
                email: this.state.value_email
            }
            console.log("-->", params)
        }
    }



    componentDidMount() {
        let params = {
            developer_id: this.props.redAuth.data.developer_id
        }
        console.log(params)
        Api._POST('contributor/find', params)
            .then((response) => {
                console.log(response.data.result)
                this.setState({data: response.data.result})
                // return response.data.result
            })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.redGetInvite)
        // if(prevState.initialRedGetInvite === this.props.redGetInvite.status){
        //     this.setState({
        //         data: this.props.redGetInvite.data
        //     })
        //     console.log(this.props.redGetInvite.data)
        //     this.props.dispatch({
        //         type:GET_INVITE_RESET
        //     })
        // }
    }
    qrCode =()=>{
        return ()=>{
            this.props.navigation.navigate('ScreenQrCode')
        }
    }

    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                      leftPress={() => this.props.navigation.goBack()} body={"Invite"}/>
                <Content>
                    <InputReg value={this.state.value_email} placeholder={"Masukkan email"}
                              onChangeText={(e) => this.setState({value_email: e})}/>
                    <Btn onPress={this.onInvite()} text={"Invite"}/>
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine}/><Text style={styles.separatorOr}>Or</Text>
                        <View style={styles.separatorLine_}/>
                    </View>
                    <Btn onPress={this.qrCode()} text={"Scan Qr Code"}/>
                    {/*<View style={{height: 250, margin: 10}}>*/}
                        {/*<QRCodeScanner*/}
                            {/*onRead={this.onSuccess.bind(this)}*/}
                        {/*/>*/}
                    {/*</View>*/}
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    }, separatorContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    separatorLine: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#000'
    },
    separatorLine_: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#000'
    },
    separatorOr: {
        color: '#000',
        marginHorizontal: 8,
        fontSize: normalizeFont(4 * .5)
    },
});
export default connect(
    mapStateToProps,
)(ScreenInvite);