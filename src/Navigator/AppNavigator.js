import React, {Component} from 'react';
import {Container, Content, List, ListItem, Separator, Thumbnail} from "native-base";
import {
    BackHandler, View, StatusBar
} from 'react-native';
import {addNavigationHelpers, DrawerNavigator, StackNavigator, TabNavigator} from "react-navigation";

import LoginScreen from '../Screen/Login/screen-login'
import SplashScreen from '../Screen/Splash/scree-splash'

import {connect} from "react-redux";
import { addListener } from '../Utils/Redux';
// const MyApp = TabNavigator({
//     Homee: {
//         screen: HomePage,
//     },
//     Location : {
//         screen :ViewLocation
//     },
//     Message : {
//         screen : ViewMessage
//     },
//     Profile : {
//         screen : ViewProfile
//     }
// }, {
//     tabBarPosition: 'bottom',
//     animationEnabled: false,
//     swipeEnabled:false,
//     tabBarOptions: {
//         lazy: true,
//         showIcon: true,
//         showLabel:false,
//         activeTintColor: '#03A9F4',
//         inactiveTintColor: 'gray',
//         labelStyle: {
//             color: '#424242'
//         },
//         style: {
//             backgroundColor: 'white',
//         },
//     },
// })

// const sideBar = DrawerNavigator({
//     Home: {screen: MyApp},

// }, {
//     contentComponent: Drawer
//     // contentComponent: AppDrawer
// });


export const AppNavigator = StackNavigator({
    Login: {screen: LoginScreen},
    Splash: {screen: SplashScreen},

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