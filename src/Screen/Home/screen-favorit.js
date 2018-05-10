import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from 'native-base';
import Head from '../../Components/Head';
function mapStateToProps(state) {
    return {

    };
}

class ScreenFavorit extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
            return <Icon name="star" size={20} color={tintColor}/>;
        }
    }
    render() {
        return (
            <Container>
                <Head
                    body={"Favorit"}
                />
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                ScreenFavorit
                </Text>
                <Text style={styles.instructions}>
                </Text>
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
)(ScreenFavorit);