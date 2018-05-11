import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import Head from '../../Components/Head';
import { InputReg } from '../../Components/Input';
import { Btn } from '../../Components/Button';

function mapStateToProps(state) {
    return {

    };
}

class ScreenInvite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value_email : ""
        }
    }
    onInvite =()=>{
        return ()=>{
            let params = {
                email : this.state.value_email
            }
        }
    }
    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                    leftPress={() => this.props.navigation.goBack()} body={"Invite"}/>
                <Content>
                    <InputReg value={this.state.value_email} placeholder={"Masukkan email"} onChangeText={(e)=>this.setState({value_email:e})}/>
                    <Btn onPress={this.onInvite()} text={"Invite"}/>
                </Content>
            </Container>
        );
    }
}

export default connect(
    mapStateToProps,
)(ScreenInvite);