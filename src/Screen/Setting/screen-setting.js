import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, List, ListItem, Content, Text} from 'native-base';
import {TouchableHighlight, StyleSheet, View} from 'react-native'
import Head from '../../Components/Head';
import {normalizeFont} from "../../Utils/func";
import Icon from 'react-native-vector-icons/FontAwesome';
import {LOGIN_RESET} from '../../Utils/Constant';

function mapStateToProps(state) {
    return {};
}

class ScreenSetting extends Component {
    onLogOut = () => {
        return () => {
            console.log("aaa")
            this.props.dispatch({type: LOGIN_RESET})
            this.props.dispatch({type: 'LOG_OUT_SUCCESS'});
        }
    }

    render() {
        return (
            <Container style={{backgroundColor: '#FFFFFF'}}>
                <Head leftIcon={"arrow-left"}
                      leftPress={() => this.props.navigation.goBack()}/>
                <Content>
                    <TouchableHighlight onPress={this.onLogOut()}>
                        <View style={styles.icon_list}>
                            <View style={{width: 30}}>
                                <Icon name="sign-out" size={normalizeFont(3 * .9)} color={'#757575'}/>
                            </View>
                            <Text style={{fontSize: normalizeFont(3 * .8)}}>Log
                                Out</Text>
                        </View>
                    </TouchableHighlight>
                </Content>
            </Container>
        );
    }
}

let styles = {
    icon_list: {
        height: 50, padding: 15, alignItems: 'center', flex: 1, flexDirection: 'row'
    },
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    separatorContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5
    },
    separatorLine: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#E0E0E0'
    },
    separatorOr: {
        fontcolor:'black',
        color: '#000',
        marginHorizontal: 8,
        fontSize: normalizeFont(4 * .5)
    },
};
export default connect(
    mapStateToProps,
)(ScreenSetting);