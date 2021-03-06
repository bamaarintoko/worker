import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Text } from 'native-base';
import Head from '../../Components/Head';

function mapStateToProps(state) {
    return {

    };
}

class ScreenTest extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
            return <Text style={{fontSize:12}}>Test</Text>;
        }
    }
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