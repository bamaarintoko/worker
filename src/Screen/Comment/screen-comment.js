import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Head from '../../Components/Head';

function mapStateToProps(state) {
    return {

    };
}

class ScreenComment extends Component {
    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                    leftPress={()=>this.props.navigation.goBack()} body={"Comment"}/>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenComment);