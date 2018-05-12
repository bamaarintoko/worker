import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native'
import { Container, Text, Content } from 'native-base';
import Head from '../../Components/Head';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { normalizeFont } from '../../Utils/func';
import { TaskCard } from '../../Components/TaskCard';
function mapStateToProps(state) {
    return {

    };
}

class ScreenDetailProject extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => {
            return <Text style={{ fontSize: 12 }}>New</Text>;
        }
    }
    componentDidMount() {
        console.log(this.props.navigation.state.params.project_id);
    }
    
    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                    leftPress={() => this.props.navigation.goBack()} body={"Detail Project"} />
                <Content>
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <View style={{ height: 30, backgroundColor: '#90CAF9', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}><Text style={styles.separatorOr}>To Do</Text></View>
                        <View style={styles.separatorLine_} />
                    </View>
                    <TaskCard/>
                    <TaskCard/>
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <View style={{ height: 30, backgroundColor: '#A5D6A7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}><Text style={styles.separatorOr}>Progress</Text></View>
                        <View style={styles.separatorLine_} />
                    </View>
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <View style={{ height: 30, backgroundColor: '#FFA726', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}><Text style={styles.separatorOr}>Ready For Test</Text></View>
                        <View style={styles.separatorLine_} />
                    </View>
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <View style={{ height: 30, backgroundColor: '#64DD17', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}><Text style={styles.separatorOr}>Done!</Text></View>
                        <View style={styles.separatorLine_} />
                    </View>
                </Content>
                <ActionButton size={40} buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#3498db' title="Project Description" onPress={() => { }}>
                        <Icon name="info-circle" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Add New Task" onPress={() => { this.props.navigation.navigate("ScreenTask",{project_id:this.props.navigation.state.params.project_id}) }}>
                        <Icon name="plus-square" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Invite Contributor" onPress={() => { this.props.navigation.navigate("ScreenInvite") }}>
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
    separatorContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20
    },
    separatorLine: {
        width:30,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#FFFFFF'
    },
    separatorLine_: {
        flex: 3,
        borderWidth: StyleSheet.hairlineWidth,
        height: StyleSheet.hairlineWidth,
        borderColor: '#FFFFFF'
    },
    separatorOr: {
        color: '#FFFFFF',
        marginHorizontal: 8,
        fontSize: normalizeFont(4 * .5)
    },
});
export default connect(
    mapStateToProps,
)(ScreenDetailProject);