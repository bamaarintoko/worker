import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Head from '../../Components/Head';

function mapStateToProps(state) {
    return {

    };
}

class ScreenRegister extends Component {
    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                    leftPress={()=>this.props.navigation.goBack()}
                />
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenRegister);