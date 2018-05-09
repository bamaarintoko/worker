import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
function mapStateToProps(state) {
    return {

    };
}

class ScreenSplash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch({type: 'Login'});
        }, 3000)
    }
    
    render() {
        return (
            <View style={styles.container}>
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