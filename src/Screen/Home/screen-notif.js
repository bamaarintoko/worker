import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content} from 'native-base';
import Head from '../../Components/Head';

function mapStateToProps(state) {
    return {};
}

class ScreenNotif extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
            return <Icon name="bell" size={20} color={tintColor}/>;
        }
    }

    render() {
        return (
            <Container>
                <Head
                    body={"Notification"}
                />
                <Content>
                    <View style={{flexDirection: 'row', padding: 5, backgroundColor: '#FFFFFF'}}>
                        <View style={{width: 20 + '%'}}>
                            <View style={{height: 50, width: 50, backgroundColor: '#BEBEBE', borderRadius: 5}}>

                            </View>
                        </View>
                        <View style={{width: 80 + "%", backgroundColor: '#FFFFFF'}}>
                            <Text style={{fontSize: 12, color:'#000'}}>
                                Yosafat Bama Arintoko
                            </Text>
                            <Text style={{fontSize: 12}}>
                                Comment on your project
                            </Text>
                            <Icon color={"#BEBEBE"} size={10} name="clock-o" style={{justifyContent: 'center'}}> {" "}
                                <Text style={{fontSize: 10}}>
                                    1 minute
                                </Text>
                            </Icon>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', padding: 5, backgroundColor: '#FFFFFF'}}>
                        <View style={{width: 20 + '%'}}>
                            <View style={{height: 50, width: 50, backgroundColor: '#BEBEBE', borderRadius: 5}}>

                            </View>
                        </View>
                        <View style={{width: 80 + "%", backgroundColor: '#FFFFFF'}}>
                            <Text style={{fontSize: 12, color:'#000'}}>
                                Yosafat Bama Arintoko
                            </Text>
                            <Text style={{fontSize: 12}}>
                                Pick new task on B2B project
                            </Text>
                            <Icon color={"#BEBEBE"} size={10} name="clock-o" style={{justifyContent: 'center'}}> {" "}
                                <Text style={{fontSize: 10}}>
                                    1 minute
                                </Text>
                            </Icon>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default connect(
    mapStateToProps,
)(ScreenNotif);