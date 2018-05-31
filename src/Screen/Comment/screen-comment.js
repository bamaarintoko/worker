import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Container, Content, Input, Item, Text} from 'native-base';
import Head from '../../Components/Head';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View} from "react-native";
import LinearGradient from "react-native-linear-gradient";

function mapStateToProps(state) {
    return {};
}

class ScreenComment extends Component {
    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                      leftPress={() => this.props.navigation.goBack()} body={"Comment"}/>
                <Content>
                    <View style={{margin: 10}}>
                        <View style={styles.card}>
                            <View style={styles.card_content}>
                                <Text style={styles.card_name}>
                                    Yosafat Bama Arintoko
                                </Text>
                                <Text style={{fontSize: 12}}>
                                    Etiam et mollis ipsum. Sed porta varius magna, lacinia hendrerit massa viverra at.
                                    Aenean vitae nibh augue. Proin eleifend accumsan nisi, vitae consectetur felis
                                    imperdiet vestibulum. Proin sit amet aliquam leo. Vestibulum scelerisque aliquam mi,
                                    a finibus nunc scelerisque nec.
                                </Text>
                                <Icon name="clock-o" size={12} color='#BEBEBE' style={{justifyContent: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#BEBEBE'}}>
                                        {' '}2 minute
                                    </Text>
                                </Icon>
                            </View>
                        </View>
                        <View style={{
                            height: 50,
                            width: 50,
                            backgroundColor: '#BEBEBE',
                            borderRadius: 5,
                            position: 'absolute'
                        }}>

                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <View style={styles.card}>
                            <View style={styles.card_content}>
                                <Text style={styles.card_name}>
                                    Sinatrio Happy Triaji
                                </Text>
                                <Text style={{fontSize: 12}}>
                                    Ut nec tortor quis tellus euismod auctor sed eget lacus. Sed at scelerisque massa,
                                    nec egestas urna. Cras sit amet elementum arcu, ac luctus libero.
                                </Text>
                                <Icon name="clock-o" size={12} color='#BEBEBE' style={{justifyContent: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#BEBEBE'}}>
                                        {' '}2 minute
                                    </Text>
                                </Icon>
                            </View>
                        </View>
                        <View style={{
                            height: 50,
                            width: 50,
                            backgroundColor: '#BEBEBE',
                            borderRadius: 5,
                            position: 'absolute'
                        }}>

                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <View style={styles.card}>
                            <View style={styles.card_content}>
                                <Text style={styles.card_name}>
                                    Sinatrio Happy Triaji
                                </Text>
                                <Text style={{fontSize: 12}}>
                                    Ut nec tortor quis tellus euismod auctor sed eget lacus. Sed at scelerisque massa,
                                    nec egestas urna. Cras sit amet elementum arcu, ac luctus libero.
                                </Text>
                                <Icon name="clock-o" size={12} color='#BEBEBE' style={{justifyContent: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#BEBEBE'}}>
                                        {' '}2 minute
                                    </Text>
                                </Icon>
                            </View>
                        </View>
                        <View style={{
                            height: 50,
                            width: 50,
                            backgroundColor: '#BEBEBE',
                            borderRadius: 5,
                            position: 'absolute'
                        }}>

                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <View style={styles.card}>
                            <View style={styles.card_content}>
                                <Text style={styles.card_name}>
                                    Sinatrio Happy Triaji
                                </Text>
                                <Text style={{fontSize: 12}}>
                                    Ut nec tortor quis tellus euismod auctor sed eget lacus. Sed at scelerisque massa,
                                    nec egestas urna. Cras sit amet elementum arcu, ac luctus libero.
                                </Text>
                                <Icon name="clock-o" size={12} color='#BEBEBE' style={{justifyContent: 'center'}}>
                                    <Text style={{fontSize: 12, color: '#BEBEBE'}}>
                                        {' '}2 minute
                                    </Text>
                                </Icon>
                            </View>
                        </View>
                        <View style={{
                            height: 50,
                            width: 50,
                            backgroundColor: '#BEBEBE',
                            borderRadius: 5,
                            position: 'absolute'
                        }}>

                        </View>
                    </View>
                </Content>
                    <LinearGradient style={{height: 50, width: '100%', backgroundColor: '#9E9E9E', padding: 5, flexDirection: 'row'}}
                        start={{x: 0.25, y: 0.25}} end={{x: 1.0, y: 1.0}}
                                    colors={['#4FC3F7', '#1E88E5', '#1A237E']}>
                        <View style={{width: 10 + '%'}}>
                            <Button transparent full style={{height: 40}}>
                                <Icon name="plus" size={20} color='#FFFFFF'/>
                            </Button>
                        </View>
                        <View style={{width: 80 + '%', justifyContent: 'center'}}>
                            <Item rounded style={{height: 30, backgroundColor: '#FFFFFF'}}>
                                <Input style={{padding:2}}/>
                            </Item>
                        </View>
                        <View style={{width: 10 + '%'}}>
                            <Button transparent full style={{height: 40}}>
                                <Icon name="paper-plane" size={20} color='#FFFFFF'/>
                            </Button>
                        </View>
                    </LinearGradient>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        left: 10 + "%",
        width: 90 + "%",
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderRadius: 5
    },
    card_content: {
        marginLeft: 25,
        minHeight: 60,
        padding: 5
    },
    card_name: {
        color: '#2196F3', fontWeight: 'bold', fontSize: 14
    }
});
export default connect(
    mapStateToProps,
)(ScreenComment);