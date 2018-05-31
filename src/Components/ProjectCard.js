import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import UserAvatar from 'react-native-user-avatar'
import { normalize, normalizeFont } from '../Utils/func';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from "react-native-linear-gradient";
export const ProjectCard = ({ data, navigation_, _contributors, _comment }) => {
    // console.log(data)
    return (
        <View style={{ height: 130, paddingLeft: 5, paddingRight: 5, paddingTop:5, paddingBottom:5 }}>
            <View style={{flex:1, borderColor: "#9E9E9E", overflow: 'hidden', backgroundColor: '#FFFFFF', height: 115, width: '100%', marginRight: 50, borderRadius:5 }}>
                <TouchableWithoutFeedback onPress={navigation_}>
                    <View style={{paddingLeft: 10, paddingRight: 10, paddingTop: 2, flex: 2, flexDirection: 'column' }}>
                        <View style={{  flex: 1, flexDirection: 'column' }}>
                            <View>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{data.project_name}</Text>
                            </View>
                            <View style={{ position: 'absolute', right: 0 }}>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{data.project_create_date}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1}}>
                            <Text style={{ fontSize: 10 }}>Nulla lorem dui, efficitur id tempus nec, gravida sed orci. Aliquam at dolor non sem gravida euismod id non orci. </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{paddingLeft: 10, paddingRight: 10, flex: 1, flexDirection: 'row', borderTopColor: '#E0E0E0', borderTopWidth: 1, justifyContent:'center', alignItems:'center' }}>
                    <TouchableWithoutFeedback onPress={_contributors}>
                        <View style={{ flex: 1, justifyContent: 'center', borderRadius: 10, height: 25, width: 100, paddingRight: 5, backgroundColor: '#F0F0F0', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12 }}>6 Contributors</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={_comment}>


                        <View style={{ flex: 1, justifyContent: 'center', borderRadius: 10, height: 25, width: 100, marginLeft: 5, backgroundColor: '#F0F0F0', alignItems: 'center' }}>
                            <Text style={{ fontSize: 12 }}>4 Comment</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </View>
        </View>
    )
}