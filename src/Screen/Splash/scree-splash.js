import React, {Component} from 'react';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    View, StatusBar
} from 'react-native';
import {actSplashLogin} from './action';
import Api from '../../Utils/Api';
import {Container} from "native-base";

function mapStateToProps(state) {
    return {
        redAuth: state.redAuth
    };
}

class ScreenSplash extends Component {
    componentDidMount() {
        console.log(this.props.redAuth)
        let params = {
            email: this.props.redAuth.data.developer_email,
            password: this.props.redAuth.data.developer_password
        }
        if (this.props.redAuth.status_get) {
            this.props.dispatch(actSplashLogin(params))
            Api._POST('auth/login_developer', params)
                .then((response) => {
                    console.log("-->", response)
                    this.props.dispatch({type: 'HOME'})
                }).catch((error) => {
                setTimeout(() => {
                    this.props.navigation.dispatch({type: 'Login'});
                }, 3000)
            })
        } else {
            setTimeout(() => {
                this.props.navigation.dispatch({type: 'Login'});
            }, 3000)
        }
        // setTimeout(() => {
        //     this.props.navigation.dispatch({ type: 'HOME' });
        // }, 3000)
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#4FC3F7"
                           barStyle="light-content"/>
                <LinearGradient colors={['#4FC3F7', '#1E88E5', '#1A237E']} style={styles.linearGradient}>

                        {/*<Image*/}
                            {/*style={{flex: 1}}*/}
                            {/*source={require('../../Assets/spalsh.png')}*/}
                            {/*resizeMode={"contain"}*/}
                        {/*/>*/}
                </LinearGradient>
            </Container>
    );
    }
    }
    const styles = StyleSheet.create({
        container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E3E3E3',
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
    },linearGradient: {
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
        }
    });
    export default connect(
    mapStateToProps,
    )(ScreenSplash);