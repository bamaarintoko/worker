import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Content } from 'native-base';
function mapStateToProps(state) {
    return {
        redAuth: state.redAuth,
        redGetProject: state.redGetProject
    };
}
import Head from '../../Components/Head'
import { actGetProject } from './action';
import UserAvatar from 'react-native-user-avatar'
import { normalize, normalizeFont } from '../../Utils/func';
import { GET_PROJECT_RESET } from '../../Utils/Constant';
import { ProjectCard } from '../../Components/ProjectCard';
import Api from '../../Utils/Api';
class ScreenHome extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="home" size={20} color={tintColor} />;
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            initialRedGetProject: true,
            data: [],
            page: 0,
            isRefresh: false
        }
    }

    componentDidMount() {
        let params = {
            project_create_by: this.props.redAuth.data.developer_id,
            data_id: this.props.redAuth.data.developer_id,
        }
        this.props.dispatch(actGetProject(params))
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.initialRedGetProject === this.props.redGetProject.status) {

            this.setState({
                data: this.props.redGetProject.data
            })
            this.props.dispatch({ type: GET_PROJECT_RESET })
        }
        // console.log("----->", this.props.redGetProject)
    }
    onLoad = () => {
        return () => {

            this.setState((prevstate, props) => ({
                page: prevstate.page + 10
            }))
            let params = {
                project_create_by: this.props.redAuth.data.developer_id,
                data_id: this.props.redAuth.data.developer_id
            }
            Api._POST('project/get', params)
                .then((response) => {
                    console.log(response)
                    if (response.data.status) {
                        var joined = this.state.data.concat(response.data.result);
                        this.setState({
                            data: joined
                        })
                    }
                })
        }

        // this.props.dispatch(actGetProject(params))
    }
    onRefresh = () => {
        let params = {
            project_create_by: this.props.redAuth.data.developer_id,
            data_id: this.props.redAuth.data.developer_id,
            skip: 0
        }
        this.props.dispatch(actGetProject(params))
    }
    render() {
        console.log(this.state.data)
        return (
            <Container style={{ backgroundColor: '#E3E3E3' }}>
                <Head
                    body={"Home"}
                    rightPress_={() => this.props.navigation.navigate('Setting')}
                    rightIcon={"cog"}
                />
                {
                    this.state.data.length > 0
                        ?
                        <FlatList
                            onRefresh={() => {
                                this.onRefresh()
                            }}
                            data={this.state.data}
                            refreshing={this.state.isRefresh}
                            // onEndReached={this.onLoad()}
                            // onEndReachedThreshold={1}
                            keyExtractor={(item, index) => '' + index}
                            renderItem={({ item, index }) => (
                                <View>
                                    <ProjectCard _comment={() => this.props.navigation.navigate('ScreenComment')} _contributors={() => this.props.navigation.navigate('ScreenContributors')} navigation_={() => this.props.navigation.navigate("DetailProject", { project_id: item.project_id })} data={item} />
                                    {/* <ProjectCard _comment={()=>this.props.navigation.navigate('ScreenComment')} _contributors={()=>this.props.navigation.navigate('ScreenContributors')} navigation_={()=>this.props.navigation.navigate("DetailProject")} data={item} /> */}
                                </View>
                            )}
                        />
                        :
                        <Content><View style={styles.container}><Text style={styles.welcome}>No data</Text></View></Content>
                }

                {/* <Content>
                    {
                        this.state.data.map((x, i) => {
                            return (
                                <View key={i}>
                                    <ProjectCard />
                                </View>
                            )
                        })
                    }

                    <View style={{ height: 115, padding: 5 }}>
                        <View style={{ borderWidth: 0.5, borderColor: '#A5D6A7', overflow: 'hidden', borderRadius: 10, backgroundColor: '#FFFFFF', height: 90, width: '100%', top: 10, marginRight: 50 }}>
                            <Text>aaaa</Text>

                        </View>
                        <View style={{ position: 'absolute', backgroundColor: '#A5D6A7', height: 30, left: 80, right: 80, top: 0, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>publish</Text>

                        </View>
                    </View>
                </Content> */}
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
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
    }
});
export default connect(
    mapStateToProps,
)(ScreenHome);