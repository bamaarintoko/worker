import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import Head from '../../Components/Head';
import { InputReg, InputArea } from '../../Components/Input';
import { Btn } from '../../Components/Button';
import { Radio } from '../../Components/Radio';
import { actAddTask } from './action';
var radio_props = [
    { label: 'Publish', value: 'publish' },
    { label: 'Draft', value: 'draft' }
];
function mapStateToProps(state) {
    return {
        redAuth : state.redAuth
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
            initialRedAddProject: true,
            alert: false
        }
    }
    componentDidMount() {
        console.log(this.props.navigation.state.params.project_id)
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
                task_pick_by : this.props.redAuth.data.developer_id
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
    render() {
        return (
            <Container>
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