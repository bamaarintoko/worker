import React from 'react';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow,
    Text
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Image, StatusBar, View} from "react-native";
import {normalize, normalizeFont} from "../Utils/func";
import LinearGradient from 'react-native-linear-gradient';
import StatusBarAlert from "react-native-statusbar-alert"

const Head = ({message_, backgroundColor, leftPress, bodyPress, rightPress, leftIcon, body, rightIcon, rightPress_, visible, onPress_}) => {
    // console.log("--->", typeof body)
    console.log('StatusBar.translucent:', StatusBar);
    return (
        <View style={{height: 70}}>
            <StatusBar  translucent backgroundColor="rgba(255, 255, 255, 0)"/>
            <LinearGradient start={{x: 0.25, y: 0.25}} end={{x: 1.0, y: 1.0}} colors={['#4FC3F7', '#1E88E5', '#1A237E']} style={{flex: 1}}>
                <View style={{marginTop:20, flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Button full transparent onPress={leftPress}>
                        <Icon size={normalizeFont(4 * .6)} name={leftIcon} color="#FFFFFF"/>
                        </Button>
                    </View>
                    <View style={{flex:6, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color:'#FFFFFF'}}>{body}</Text>
                       {/*{*/}
                        {/*typeof body === 'undefined'*/}
                        {/*&&*/}
                        {/*<Image*/}
                        {/*resizeMode={'contain'}*/}
                        {/*style={{width:normalize(110*.6)}}*/}
                        {/*source={require('../utils/assetss/header.png')}*/}
                        {/*/>*/}
                        {/*} */}
                    </View>
                    <View style={{flex:1}}>
                        <Button full transparent onPress={rightPress_}>
                        <Icon size={normalizeFont(4 * .6)} name={rightIcon} color="#FFFFFF"/>
                        </Button>
                    </View>
                </View>
                {/*<Header androidStatusBarColor="#4FC3F7"*/}
                {/*style={{backgroundColor: '#FFFFFF',opacity: 0.3}}>*/}
                {/*<Left style={{flex: 1}}>*/}
                {/*<Button full transparent onPress={leftPress}>*/}
                {/*<Icon size={normalizeFont(4 * .6)} name={leftIcon} color="#29363d"/>*/}
                {/*</Button>*/}
                {/*</Left>*/}
                {/*<Body style={{flex: 6, justifyContent: 'center', alignItems: 'center'}}>*/}

                {/*<Text style={{color:'#000000', fontWeight:'bold'}}>{body}</Text>*/}
                {/*/!* {*/}
                {/*typeof body === 'undefined'*/}
                {/*&&*/}
                {/*<Image*/}
                {/*resizeMode={'contain'}*/}
                {/*style={{width:normalize(110*.6)}}*/}
                {/*source={require('../utils/assetss/header.png')}*/}
                {/*/>*/}
                {/*} *!/*/}

                {/*</Body>*/}
                {/*<Right style={{flex: 1}}>*/}
                {/*<Button full transparent onPress={rightPress_}>*/}
                {/*<Icon size={normalizeFont(4 * .6)} name={rightIcon} color="#29363d"/>*/}
                {/*</Button>*/}
                {/*</Right>*/}
                {/*</Header>*/}

            </LinearGradient>
        </View>
    );
};

export default Head;