import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

export const TaskCard = ({})=>{
    return (
        <View style={{marginLeft:30, marginRight:10, backgroundColor:"#FFFFFF", padding:5, borderBottomWidth:1, borderBottomColor:"#E0E0E0"}}>
            <Text style={{fontSize:12}}>
            Nulla lorem dui, efficitur id tempus nec, gravida sed orci. Aliquam at dolor non sem gravida euismod id non orci. Fusce est diam, dignissim sit amet gravida quis, venenatis vitae odio.
            </Text>
        </View>
    )
}