import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Head from '../../Components/Head';

function mapStateToProps(state) {
    return {

    };
}

class ScreenContributors extends Component {
    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                    leftPress={()=>this.props.navigation.goBack()} body={"Contributors"}/>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenContributors);