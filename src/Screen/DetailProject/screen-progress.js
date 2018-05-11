import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Head from '../../Components/Head';

function mapStateToProps(state) {
    return {

    };
}

class ScreenProgress extends Component {
    render() {
        return (
            <Container>
                <Head body={"Progress Task"}/>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenProgress);