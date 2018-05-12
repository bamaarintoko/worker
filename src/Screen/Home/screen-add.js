import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content, Button } from 'native-base';
import Head from '../../Components/Head';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import { InputReg, InputArea } from '../../Components/Input';
import { Btn } from '../../Components/Button';
import { Radio } from '../../Components/Radio';
import Api from '../../Utils/Api';
import { actAddProject } from './action';
import Modal from "react-native-modal";
import Spinner from 'react-native-loading-spinner-overlay';
import { ADD_PROJCET_RESET } from '../../Utils/Constant';
import StatusBarAlert from 'react-native-statusbar-alert'
var radio_props = [
    { label: 'Publish', value: 'publish' },
    { label: 'Draft', value: 'draft' }
];

class ScreenAdd extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="plus-square" size={20} color={tintColor} />;
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            value_project_status: "publish",
            value_project_nama: "",
            value_project_desc: "",
            isAddSuccess: false,
            isAddFailed: false,
            message: " ",
            isModalVisible: false,
            initialRedAddProject: true,
            alert: false
        }
    }

    componentDidMount() {
        console.log("ass")
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(this.state.isLoading)
        if (prevState.initialRedAddProject === this.props.redAddProject.status) {
            if (this.props.redAddProject.status_add) {
                this.setState({
                    isAddSuccess: true,
                    isAddFailed: false,
                    message: "Tambah project berhasil",
                    value_project_status: "publish",
                    value_project_nama: "",
                    value_project_desc: ""
                })
            } else {
                this.setState({
                    isAddSuccess: false,
                    isAddFailed: true,
                    message: "Tambah project gagal"
                })
            }

            this.setState({
                isModalVisible: false,
                alert: true,
            })
            // console.log(this.state.alert)
            this.props.dispatch({ type: ADD_PROJCET_RESET })
        }
    }

    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    _onSave = () => {

        return () => {

            let params = {
                project_name: this.state.value_project_nama,
                project_desc: this.state.value_project_desc,
                project_create_by: this.props.redAuth.data.developer_id,
                project_status: this.state.value_project_status
            }
            this.props.dispatch(actAddProject(params))
            this.setState({
                isModalVisible: true
            })
        }
    }
    _onChangeText = (key) => {
        return (e) => {
            var state = {};
            state[key] = e
            this.setState(state)
        }
    }
    toggleSuccess = () => {
        return () => {
            this.setState({
                isAddSuccess: false
            })
        }
    }
    togglFailed = () => {
        return () => {
            this.setState({
                isAddFailed: false
            })
        }
    }
    render() {
        return (
            <Container>
                <StatusBarAlert
                    message={"Tambah project berhasil. Tap to close"}
                    visible={this.state.isAddSuccess}
                    backgroundColor="#4FC3F7"
                    onPress={this.toggleSuccess()}
                    color="white" />
                <StatusBarAlert
                    message={"Tambah project gagal. Tap to close"}
                    visible={this.state.isAddFailed}
                    backgroundColor="#FF6F00"
                    onPress={this.togglFailed()}
                    color="white" />
                <Head
                    body={"Tambah"}
                />

                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.modalContent}>
                        <Text>Loading</Text>
                    </View>
                </Modal>
                <Content>
                    <InputReg
                        value={this.state.value_project_nama}
                        onChangeText={this._onChangeText("value_project_nama")}
                        placeholder={"Nama project"}
                    />
                    <InputArea
                        value={this.state.value_project_desc}
                        onChangeText={this._onChangeText("value_project_desc")}
                        rowSpan={8}
                        placeholder={"Deskripsi Project"}
                    />
                    <Radio
                        onPress={(v) => this.setState({ value_project_status: v })}
                        radio_props={radio_props} />
                    <Btn
                        onPress={this._onSave()}
                        text={"Simpan Project"} />

                </Content>


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
    alert: {

    },
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
function mapStateToProps(state) {
    return {
        redAuth: state.redAuth,
        redAddProject: state.redAddProject
    };
}
export default connect(
    mapStateToProps,
)(ScreenAdd);