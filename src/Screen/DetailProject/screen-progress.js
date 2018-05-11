import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container , Text} from 'native-base';
import Head from '../../Components/Head';

function mapStateToProps(state) {
    return {

    };
}

class ScreenProgress extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
            return <Text style={{fontSize:7}}>Progress</Text>;
        }
    }
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