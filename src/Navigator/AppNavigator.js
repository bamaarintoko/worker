import React, {Component} from 'react';
import {Container, Content, List, ListItem, Separator, Thumbnail} from "native-base";
import {
    BackHandler, View, StatusBar
} from 'react-native';
import {addNavigationHelpers, DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";

import LoginScreen from '../Screen/Login/screen-login'
import SplashScreen from '../Screen/Splash/scree-splash'
import ScreenHome from '../Screen/Home/screen-home'
import ScreenAdd from '../Screen/Home/screen-add'
import ScreenNotif from '../Screen/Home/screen-notif'
import ScreenFavorit from '../Screen/Home/screen-favorit'
import ScreenProfil from '../Screen/Home/screen-profil'
import ScreenSetting from '../Screen/Setting/screen-setting'
import ScreenRegister from '../Screen/Register/screen-register'
import ScreenDetailProject from '../Screen/DetailProject/screen-detail-project'
import ScreenContributors from '../Screen/Contributtors/screen-contributors'
import ScreenComment from '../Screen/Comment/screen-comment'
import ScreenTask from '../Screen/Task/screen-task'
import ScreenProgress from '../Screen/DetailProject/screen-progress'
import ScreenTest from '../Screen/DetailProject/screen-test'
import ScreenFinish from '../Screen/DetailProject/screen-finish'
import ScreenInvite from '../Screen/InviteConstributors/screen-invite'
import Home from '../Screen/Home/home'

import {connect} from "react-redux";
import { addListener } from '../Utils/Redux';
const MyApp = TabNavigator({
    Homee: {
        screen: ScreenHome,
    },Favorit : {
        screen : ScreenFavorit
    },
    Add : {
        screen :ScreenAdd
    },
    Notif : {
        screen : ScreenNotif
    },
    
    Profil : {
        screen : ScreenProfil
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled:false,
    tabBarOptions: {
        lazy: true,
        showIcon: true,
        showLabel:false,
        activeTintColor: '#03A9F4',
        inactiveTintColor: 'gray',
        labelStyle: {
            color: '#424242'
        },
        style: {
            backgroundColor: 'white',
        },
    },
})

const myTask = TabNavigator({
    New:{
        screen: ScreenDetailProject
    },
    Progress:{
        screen:ScreenProgress
    },
    Test : {
        screen:ScreenTest
    },
    Finish:{
        screen:ScreenFinish
    }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled:false,
    tabBarOptions: {
        lazy: true,
        showIcon: true,
        showLabel:false,
        activeTintColor: '#03A9F4',
        inactiveTintColor: 'gray',
        labelStyle: {
            color: '#424242'
        },
        style: {
            backgroundColor: 'white',
        },
    },
})

// const sideBar = DrawerNavigator({
//     Home: {screen: MyApp},

// }, {
//     // contentComponent: Drawer
//     // contentComponent: AppDrawer
// });


export const AppNavigator = StackNavigator({
    Login: {screen: LoginScreen},
    Splash: {screen: SplashScreen},
    Setting: {screen: ScreenSetting},
    Register: {screen: ScreenRegister},
    DetailProject: {screen: myTask},
    ScreenContributors: {screen: ScreenContributors},
    ScreenComment: {screen: ScreenComment},
    ScreenTask: {screen: ScreenTask},
    ScreenInvite: {screen: ScreenInvite},
    Menu: {screen: MyApp},

}, {
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: true
    }
});

class AppWithNavigationState extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function () {
            const {dispatch, navigation, nav} = this.props;

            if (nav.routes.length === 1) {
                BackHandler.exitApp()
                return false;
            }
            dispatch({type: 'Navigation/BACK'});
            return true;
        }.bind(this));
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log("aaa");
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress');
    }

    render() {
        return (            
            <AppNavigator navigation={addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav,addListener})}/>
            
        )
    }
};

function mapStateToProps(state) {
    return {
        nav: state.nav,
        redAuth:state.redAuth
    };
}


export default connect(mapStateToProps)(AppWithNavigationState);