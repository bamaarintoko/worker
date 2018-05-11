import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native'
import { Container, Text } from 'native-base';
import Head from '../../Components/Head';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
function mapStateToProps(state) {
    return {

    };
}

class ScreenDetailProject extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({tintColor}) => {
            return <Text>New</Text>;
        }
    }
    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                    leftPress={() => this.props.navigation.goBack()} body={"Detail Project"} />
                <ActionButton size={40} buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#3498db' title="Project Description" onPress={() => { }}>
                        <Icon name="info-circle" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Add New Task" onPress={() => {this.props.navigation.navigate("ScreenTask")}}>
                        <Icon name="plus-square" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Invite Contributor" onPress={() => { }}>
                        <Icon name="user-plus" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
  });
export default connect(
    mapStateToProps,
)(ScreenDetailProject);