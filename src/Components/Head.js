import React from 'react';
import {
    Body,
    Button, Container, Content, Footer, FooterTab, Form, Header, Input, Item, Left, Right, SwipeRow,
    Text
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, View } from "react-native";
import { normalize, normalizeFont } from "../Utils/func";
import StatusBarAlert from "react-native-statusbar-alert"
const Head = ({ message_,backgroundColor,leftPress, bodyPress, rightPress, leftIcon, body, rightIcon, rightPress_,visible,onPress_ }) => {
    // console.log("--->", typeof body)
    return (
        <View>
            
            <Header androidStatusBarColor="#4FC3F7"
                style={{ backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#BEBEBE' }}>
                <Left style={{ flex: 1 }}>
                    <Button full transparent onPress={leftPress}>
                        <Icon size={normalizeFont(4 * .6)} name={leftIcon} color="#29363d" />
                    </Button>
                </Left>
                <Body style={{ flex: 6, justifyContent: 'center', alignItems: 'center' }}>

                    <Text>{body}</Text>
                    {/* {
                typeof body === 'undefined'
                &&
                <Image
                resizeMode={'contain'}
                style={{width:normalize(110*.6)}}
                source={require('../utils/assetss/header.png')}
                />
            } */}

                </Body>
                <Right style={{ flex: 1 }}>
                    <Button full transparent onPress={rightPress_}>
                        <Icon size={normalizeFont(4 * .6)} name={rightIcon} color="#29363d" />
                    </Button>
                </Right>

            </Header>
            
        </View>
    );
};

export default Head;