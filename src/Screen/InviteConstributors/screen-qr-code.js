import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from "react-native";
import {Container} from "native-base";
import QRCodeScanner from "react-native-qrcode-scanner";
import Head from "../../Components/Head";

class ScreenQrCode extends Component {
    constructor(props) {
        super(props);

    }

    onSuccess(e) {
        console.log(e)
    }
    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                      leftPress={() => this.props.navigation.goBack()} body={"Scan QR Code"}/>
                <QRCodeScanner
                    onRead={this.onSuccess.bind(this)}
                />
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(ScreenQrCode);
