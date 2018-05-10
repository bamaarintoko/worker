import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View, StatusBar
} from 'react-native';
import { actSplashLogin } from './action';
import Api from '../../Utils/Api';
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
                    console.log("-->",response)
                    this.props.dispatch({type:'HOME'})
                }).catch((error) => {
                    setTimeout(() => {
                        this.props.navigation.dispatch({ type: 'Login' });
                    }, 3000)
                })
        } else {
            setTimeout(() => {
                this.props.navigation.dispatch({ type: 'Login' });
            }, 3000)
        }
        // setTimeout(() => {
        //     this.props.navigation.dispatch({ type: 'HOME' });
        // }, 3000)
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar backgroundColor="#4FC3F7"
     barStyle="light-content"/>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    ScreenSplash
                </Text>
                <Text style={styles.instructions}>
                </Text>
            </View>
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
)(ScreenSplash);