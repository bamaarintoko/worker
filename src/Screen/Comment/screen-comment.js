import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Content, Text} from 'native-base';
import Head from '../../Components/Head';
import {View} from "react-native";

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
                        <View style={{
                            left: 10 + "%",

                            width: 90 + "%",
                            backgroundColor: '#FFFFFF',
                            position: 'relative',
                            borderRadius: 5
                        }}>
                            <View style={{
                                marginLeft: 25,
                                minHeight:60
                            }}>
                                <Text style={{color: '#2196F3', fontWeight: 'bold', fontSize: 14}}>
                                    Yosafat Bama Arintoko
                                </Text>
                                <Text style={{fontSize: 12}}>
                                    Etiam et mollis ipsum. Sed porta varius magna, lacinia hendrerit massa viverra at.
                                    Aenean vitae nibh augue. Proin eleifend accumsan nisi, vitae consectetur felis
                                    imperdiet vestibulum. Proin sit amet aliquam leo. Vestibulum scelerisque aliquam mi,
                                    a finibus nunc scelerisque nec.
                                </Text>
                                <Text style={{fontSize: 12}}>
                                    last seen :
                                </Text>
                            </View>
                        </View>
                        <View style={{height: 50, width: 50, backgroundColor: '#BEBEBE', borderRadius: 5, position:'absolute'}}>

                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <View style={{
                            left: 10 + "%",

                            width: 90 + "%",
                            backgroundColor: '#FFFFFF',
                            position: 'relative',
                            borderRadius: 5
                        }}>
                            <View style={{
                                marginLeft: 25,
                                minHeight:60
                            }}>
                                <Text style={{color: '#2196F3', fontWeight: 'bold', fontSize: 14}}>
                                    Yosafat Bama Arintoko
                                </Text>
                                <Text style={{fontSize: 12}}>
                                    Etiam et mollis ipsum. Sed porta varius magna, lacinia hendrerit massa viverra at.
                                    Aenean vitae nibh augue. Proin eleifend accumsan nisi, vitae consectetur felis
                                    imperdiet vestibulum. Proin sit amet aliquam leo. Vestibulum scelerisque aliquam mi,
                                    a finibus nunc scelerisque nec.
                                </Text>
                                <Text style={{fontSize: 12}}>
                                    last seen :
                                </Text>
                            </View>
                        </View>
                        <View style={{height: 50, width: 50, backgroundColor: '#BEBEBE', borderRadius: 5, position:'absolute'}}>

                        </View>
                    </View>
                    {/*<View style={{margin: 10, marginTop:40}}>*/}
                        {/*<View style={{*/}
                            {/*left: 10 + "%",*/}
                            {/*height: 60,*/}
                            {/*width: 90 + "%",*/}
                            {/*backgroundColor: '#FFFFFF',*/}
                            {/*position: 'absolute',*/}
                            {/*borderRadius: 5*/}
                        {/*}}>*/}
                            {/*<View style={{*/}
                                {/*marginLeft: 25*/}
                            {/*}}>*/}
                                {/*<Text style={{color: '#2196F3'}}>*/}
                                    {/*aaa*/}
                                {/*</Text>*/}
                                {/*<Text style={{fontSize: 12}}>*/}
                                    {/*last seen :*/}
                                {/*</Text>*/}
                            {/*</View>*/}
                        {/*</View>*/}
                        {/*<View style={{height: 50, width: 50, backgroundColor: '#BEBEBE', borderRadius: 5}}>*/}

                        {/*</View>*/}
                    {/*</View>*/}
                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenComment);