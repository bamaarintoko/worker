import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

export const TaskCard = ({date,progress_date,test_date,finish_date,text})=>{
    return (
        <View style={{marginLeft:30, marginRight:10, backgroundColor:"#FFFFFF", padding:5, borderBottomWidth:1, borderBottomColor:"#E0E0E0"}}>
            <Text style={{fontSize:12}}>
            {date}
            </Text>
            <Text style={{fontSize:12}}>
            {text}
            </Text>
        </View>
    )
}

export const TaskCardProg = ({date,progress_date,test_date,finish_date,text})=>{
    return (
        <View style={{marginLeft:30, marginRight:10, backgroundColor:"#FFFFFF", padding:5, borderBottomWidth:1, borderBottomColor:"#E0E0E0"}}>
            <Text style={{fontSize:12}}>
            {date}
            </Text>
            <Text style={{fontSize:12}}>
            {text}
            </Text>
        </View>
    )
}
export const TaskCardTest = ({date,progress_date,test_date,finish_date,text})=>{
    return (
        <View style={{marginLeft:30, marginRight:10, backgroundColor:"#FFFFFF", padding:5, borderBottomWidth:1, borderBottomColor:"#E0E0E0"}}>
            <Text style={{fontSize:12}}>
            {date}
            </Text>
            <Text style={{fontSize:12}}>
            {text}
            </Text>
        </View>
    )
}
export const TaskCardDone = ({date,progress_date,test_date,finish_date,text})=>{
    return (
        <View style={{marginLeft:30, marginRight:10, backgroundColor:"#FFFFFF", padding:5, borderBottomWidth:1, borderBottomColor:"#E0E0E0"}}>
            <Text style={{fontSize:12}}>
            {date}
            </Text>
            <Text style={{fontSize:12}}>
            {text}
            </Text>
        </View>
    )
}