import ScreenHome from './screen-home'
import {TabNavigator} from "react-navigation"
const MyApp = TabNavigator({
    Home_:{
        screen:ScreenHome
    }
},{
    // navigationOptions: ({ navigation }) => ({
    //     tabBarIcon : ({focused, tintColor}) => {
    //         const { routeName } = navigation.state;
    //         console.log(routeName)
    //         // let color = 'orange'
    //         // //console.log(focused)
    //         // if (routeName==='Home'){
    //         //     color = 'grey'
    //         // } 
    //         return <Icon name="home" size={20} color={tintColor} />;
    //     }
    // }),
        tabBarPosition: 'bottom',
        animationEnabled: true,        
        tabBarOptions: {
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