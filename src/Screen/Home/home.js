import MyApp from './index'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, TouchableWithoutFeedback } from 'react-native';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow,
    Text
} from "native-base";

function mapStateToProps(state) {
    return {

    };
}

class Home extends Component {
    render() {
        return (
            <Container>
                <MyApp />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);