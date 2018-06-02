import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, Text} from 'native-base';
import Head from '../../Components/Head';
import UserAvatar from 'react-native-user-avatar'
import {View} from "react-native";

function mapStateToProps(state) {
    return {};
}

class ScreenContributors extends Component {
    render() {
        return (
            <Container style={{backgroundColor: '#E0E0E0'}}>
                <Head leftIcon={"arrow-left"}
                      leftPress={() => this.props.navigation.goBack()} body={"Contributors"}/>
                <Content>
                    <View style={{margin: 10, justifyContent: 'center',}}>
                        <View style={{
                            left: 10 + "%",
                            height: 60,
                            width: 90 + "%",
                            backgroundColor: '#FFFFFF',
                            position: 'absolute',
                            borderRadius: 5
                        }}>
                            <View style={{
                                marginLeft: 25, flex: 1,
                                justifyContent: 'center',
                            }}>
                                <Text style={{fontSize:12}}>
                                    Sinatrio Happy Triaji
                                </Text>
                                <Text style={{fontSize:12}}>
                                    last seen :
                                </Text>
                            </View>
                        </View>
                        <View style={{height: 50, width: 50, backgroundColor: '#BEBEBE', borderRadius: 5}}>

                        </View>
                    </View>
                    <View style={{margin: 10, justifyContent: 'center',}}>
                        <View style={{
                            left: 10 + "%",
                            height: 60,
                            width: 90 + "%",
                            backgroundColor: '#FFFFFF',
                            position: 'absolute',
                            borderRadius: 5
                        }}>
                            <View style={{
                                marginLeft: 25, flex: 1,
                                justifyContent: 'center',
                            }}>
                                <Text style={{fontSize:12}}>
                                    Nur Kholis
                                </Text>
                                <Text style={{fontSize:12}}>
                                    last seen :
                                </Text>
                            </View>
                        </View>
                        <View style={{height: 50, width: 50, backgroundColor: '#BEBEBE', borderRadius: 5}}>

                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenContributors);