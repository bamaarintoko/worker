import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Container, Text, Content, Button } from 'native-base';
import Head from '../../Components/Head';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { normalizeFont } from '../../Utils/func';
import { TaskCard, TaskCardProg, TaskCardTest, TaskCardDone } from '../../Components/TaskCard';
import { GET_TASK_RESET } from '../../Utils/Constant';
import { actGetTask, actPickTask, actPickTest } from './actio';
import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';
function mapStateToProps(state) {
    return {
        redGetTaskReducer: state.redGetTaskReducer,
        redAuth: state.redAuth
    };
}

class ScreenDetailProject extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => {
            return <Text style={{ fontSize: 12 }}>New</Text>;
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            initialRedGetTask: true,
            isModalVisible: false,
            isModalTestVisible: false,
            to_do: [],
            progress: [],
            test: [],
            done: [],
            task_id: "",
            starCount: 1

        }
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    componentDidMount() {
        let params = { project_id: this.props.navigation.state.params.project_id }
        this.props.dispatch(actGetTask(params))
        console.log(this.props.navigation.state.params.project_id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.initialRedGetTask == this.props.redGetTaskReducer.status) {
            this.setState({
                to_do: this.props.redGetTaskReducer.data.to_do,
                progress: this.props.redGetTaskReducer.data.progress,
                test: this.props.redGetTaskReducer.data.test,
                finish: this.props.redGetTaskReducer.data.finish
            })
            console.log(this.props.redGetTaskReducer)
            this.props.dispatch({ type: GET_TASK_RESET })
        }
    }
    _toggleModal = (id) => {

        return () => {
            this.setState({ isModalVisible: !this.state.isModalVisible, task_id: id });

        }
    }
    _toggleModalTest = (id) => {

        return () => {
            this.setState({ isModalTestVisible: !this.state.isModalTestVisible, task_id: id });

        }
    }

    _togglePick = (id) => {
        return () => {
            console.log(this.props.redAuth.data.developer_id)
            let params = {
                task_id: this.state.task_id,
                developer_id: this.props.redAuth.data.developer_id,
                project_id: this.props.navigation.state.params.project_id
            }
            this.props.dispatch(actPickTask(params))
            this.setState({ isModalVisible: !this.state.isModalVisible, task_id: "" });
        }
    }

    _togglePickTest = () => {
        return () => {
            let params = {
                task_id: this.state.task_id,
                developer_id: this.props.redAuth.data.developer_id,
                project_id: this.props.navigation.state.params.project_id,
                starCount : this.state.starCount
            }
            this.props.dispatch(actPickTest(params))
            this.setState({ isModalTestVisible: !this.state.isModalTestVisible, task_id: "" });
            // console.log(params)
        }
    }

    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                    leftPress={() => this.props.navigation.goBack()} body={"Detail Project"} />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalContent}>
                        <Text>Pick this task?</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Button onPress={this._togglePick()} full info>
                                <Text>Pick</Text>
                            </Button>
                            <View><Text>{" "}</Text></View>
                            <Button onPress={this._toggleModal()} full warning>
                                <Text>Cancel</Text>
                            </Button>
                            {/* <Button onPress={this._toggleModal}><Text>Click me!</Text></Button> */}
                            {/* <Button onPress={this._toggleModal}><Text>Click me!</Text></Button> */}
                        </View>
                    </View>
                </Modal>
                <Modal isVisible={this.state.isModalTestVisible}>
                    <View style={styles.modalContent}>

                        <Text>Ready for test?</Text>
                        <Text style={{fontSize:12, marginTop:5}}>Rate this task difficulty</Text>
                        <View>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starCount}
                                fullStarColor={'#FFB300'}
                                starSize={30}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                            />
                        </View>
                        <View style={{ flexDirection: "row", marginTop:5 }}>
                            <Button onPress={this._togglePickTest()} full info>
                                <Text>Ready To Test!</Text>
                            </Button>
                            <View><Text>{" "}</Text></View>
                            <Button onPress={this._toggleModalTest()} full warning>
                                <Text>Cancel</Text>
                            </Button>
                            {/* <Button onPress={this._toggleModal}><Text>Click me!</Text></Button> */}
                            {/* <Button onPress={this._toggleModal}><Text>Click me!</Text></Button> */}
                        </View>
                    </View>
                </Modal>
                <Content>

                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <View style={{ height: 30, backgroundColor: '#90CAF9', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}><Text style={styles.separatorOr}>To Do</Text></View>
                        <View style={styles.separatorLine_} />
                    </View>
                    {
                        this.state.to_do.length > 0
                        &&
                        this.state.to_do.map((x, i) => {
                            return (
                                <TouchableWithoutFeedback key={i} onPress={this._toggleModal(x.task_id)}>
                                    <View>
                                        <TaskCard date={x.task_create_date} text={x.task_desc} />
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <View style={{ height: 30, backgroundColor: '#A5D6A7', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}><Text style={styles.separatorOr}>Progress</Text></View>
                        <View style={styles.separatorLine_} />
                    </View>
                    {
                        this.state.progress.length > 0
                        &&
                        this.state.progress.map((x, i) => {
                            return (
                                <TouchableWithoutFeedback key={i} onPress={this._toggleModalTest(x.task_id)}>
                                    <View>
                                        <TaskCardProg date={x.task_create_date} text={x.task_desc} />
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <View style={{ height: 30, backgroundColor: '#FFA726', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}><Text style={styles.separatorOr}>Ready For Test</Text></View>
                        <View style={styles.separatorLine_} />
                    </View>
                    {
                        this.state.test.length > 0
                        &&
                        this.state.test.map((x, i) => {
                            return (
                                <View key={i}>

                                    <TaskCardTest date={x.task_bug_date} text={x.task_desc} />
                                </View>
                            )
                        })
                    }
                    <View style={styles.separatorContainer}>
                        <View style={styles.separatorLine} />
                        <View style={{ height: 30, backgroundColor: '#64DD17', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}><Text style={styles.separatorOr}>Done!</Text></View>
                        <View style={styles.separatorLine_} />
                    </View>
                    {
                        this.state.done.length > 0
                        &&
                        this.state.done.map((x, i) => {
                            return (
                                <View key={i}>

                                    <TaskCardDone date={x.task_finish_date} text={x.task_desc} />
                                </View>
                            )
                        })
                    }
                </Content>
                <ActionButton size={40} buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#3498db' title="Project Description" onPress={() => { }}>
                        <Icon name="info-circle" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Add New Task" onPress={() => { this.props.navigation.navigate("ScreenTask", { project_id: this.props.navigation.state.params.project_id }) }}>
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
    modalContent: {
        backgroundColor: '#F0F0F0',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
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
        width: 30,
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