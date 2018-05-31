import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import Head from '../../Components/Head';
import { InputReg, InputArea } from '../../Components/Input';
import { Btn } from '../../Components/Button';
import { Radio } from '../../Components/Radio';
import { actAddTask } from './action';
import { ADD_TASK_RESET } from '../../Utils/Constant';
import StatusBarAlert from 'react-native-statusbar-alert'
var radio_props = [
    { label: 'Publish', value: 'publish' },
    { label: 'Draft', value: 'draft' }
];
function mapStateToProps(state) {
    return {
        redAuth : state.redAuth,
        redAddTaskReducer : state.redAddTaskReducer
    };
}

class ScreenTask extends Component {
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
            initialRedAddTask: true,
            alert: false
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.redAddTaskReducer.status === prevState.initialRedAddTask){
            if (this.props.redAddTaskReducer.status_add) {
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
            this.props.dispatch({
                type:ADD_TASK_RESET
            })
        }
    }
    
    componentDidMount() {

        console.log("--->",this.props.redAuth)
    }
    
    _onChangeText = (key) => {
        return (e) => {
            var state = {};
            state[key] = e
            this.setState(state)
        }
    }
    _onSave = () => {

        return () => {
            let params = {
                project_id : this.props.navigation.state.params.project_id,
                task_name : this.state.value_project_nama,
                task_desc : this.state.value_project_desc,
                data_id : this.props.redAuth.data.developer_id,
                task_pick_by : 0
            }
            console.log("save", params)
            this.props.dispatch(actAddTask(params))
            // let params = {
            //     project_name: this.state.value_project_nama,
            //     project_desc: this.state.value_project_desc,
            //     project_create_by: this.props.redAuth.data.developer_id,
            //     project_status: this.state.value_project_status
            // }
            // this.props.dispatch(actAddProject(params))
            // this.setState({
            //     isModalVisible: true
            // })
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
                    message={"Add new task success. Tap to close"}
                    visible={this.state.isAddSuccess}
                    backgroundColor="#4FC3F7"
                    onPress={this.toggleSuccess()}
                    color="white" />
                <StatusBarAlert
                    message={"Add new task failed. Tap to close"}
                    visible={this.state.isAddFailed}
                    backgroundColor="#FF6F00"
                    onPress={this.togglFailed()}
                    color="white" />
                <Head leftIcon={"arrow-left"}
                    leftPress={()=>this.props.navigation.goBack()} body={"Add Task"} />
                <Content>
                    <InputReg
                        value={this.state.value_project_nama}
                        onChangeText={this._onChangeText("value_project_nama")}
                        placeholder={"Nama Task"}
                    />
                    <InputArea
                        value={this.state.value_project_desc}
                        onChangeText={this._onChangeText("value_project_desc")}
                        rowSpan={8}
                        placeholder={"Description Task"}
                    />
                    <Btn
                        onPress={this._onSave()}
                        text={"Simpan Task"} />

                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenTask);