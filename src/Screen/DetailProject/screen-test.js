import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Head from '../../Components/Head';

function mapStateToProps(state) {
    return {

    };
}

class ScreenTest extends Component {
    render() {
        return (
            <Container>
                <Head body={"Testing Task"}/>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenTest);