import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Platform, StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Container, Content, Thumbnail} from 'native-base';
import Head from '../../Components/Head';
import QRCode from 'react-native-qrcode';
import LinearGradient from "react-native-linear-gradient";

function mapStateToProps(state) {
    return {
        redAuth: state.redAuth,
    };
}

class ScreenProfil extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
            return <Icon name="user-circle-o" size={20} color={tintColor}/>;
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.props.redAuth)
    }

    componentDidMount() {
        console.log(this.props.redAuth.data.developer_email)

    }


    render() {
        return (
            <Container>
                {/*<Head*/}
                {/*body={"Profil"}*/}
                {/*/>*/}
                <StatusBar translucent backgroundColor="rgba(255, 255, 255, 0)"/>
                <Content>

                    <LinearGradient style={{
                        height: 200,
                        width: '100%',
                        backgroundColor: '#9E9E9E',
                        padding: 5,
                        flexDirection: 'row',
                        position: 'absolute'
                    }}
                                    start={{x: 0.25, y: 0.25}} end={{x: 1.0, y: 1.0}}
                                    colors={['#4FC3F7', '#1E88E5', '#1A237E']}>

                    </LinearGradient>

                    <View style={{
                        flex: 1,
                        height: 400,
                        backgroundColor: 'rgba(255,255,255,0.5)',
                        borderRadius: 5,
                        marginTop: 100,
                        marginLeft: 15,
                        marginRight: 15,
                        justifyContent:'center',
                    }}>
                        <View style={{alignItems:'center'}}>
                            <QRCode
                                value={this.props.redAuth.data.developer_email}
                                size={150}
                                bgColor='black'
                                fgColor='white'/>
                        </View>
                    </View>
                    <View style={{position: 'absolute', top: 60, left: 0, right: 0, bottom: 0, alignItems: 'center'}}>
                        <Thumbnail large
                                   source={{uri: 'https://www.mills.edu/uniquely-mills/students-faculty/student-profiles/images/student-profile-gabriela-mills-college.jpg'}}/>
                        <Text style={{fontSize: 16, color:'#2196F3'}}>
                            {this.props.redAuth.data.developer_name}
                        </Text>
                    </View>

                </Content>
                {/*<QRCode*/}
                {/*value={"yosafatbama.arintoko@gmail.com"}*/}
                {/*size={100}*/}
                {/*bgColor='black'*/}
                {/*fgColor='white'/>*/}
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
)(ScreenProfil);