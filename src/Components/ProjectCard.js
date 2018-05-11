import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import UserAvatar from 'react-native-user-avatar'
export const ProjectCard = ({ data,navigation_,_contributors,_comment }) => {
    console.log(data)
    return (
        <View style={{ height: 115, padding: 5, marginTop: 5 }}>
            <View style={{ borderWidth: 0.5, borderColor: data.project_status === "publish" ? "#90CAF9" : '#A5D6A7', overflow: 'hidden', borderRadius: 10, backgroundColor: '#FFFFFF', height: 90, width: '100%', top: 10, marginRight: 50 }}>
                <View style={{ paddingTop: 10, paddingLeft: 5, paddingRight: 5, flex: 1, flexDirection: 'column' }}>
                    <TouchableWithoutFeedback onPress={navigation_}>
                        <View style={{ flex: 2, flexDirection: 'column' }}>

                            <View style={{ flex: 1, flexDirection: 'row' }}>

                                <View>

                                    <Text style={{ fontSize: 12 }}>Project Name</Text>
                                </View>
                                <View>

                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}> : {data.project_name}</Text>
                                </View>
                                <View style={{ position: 'absolute', right: 0 }}>

                                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{data.project_create_date}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: 12 }}>Total Task</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 12 }}>Contibutor :</Text>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            {/* <View style={{ flex: 1 }}> */}
                            <View style={{ flex: 1, flexDirection: 'row' }}>

                                <UserAvatar size="25" name="Avishay Bar" />
                                {/* </View> */}
                                <UserAvatar size="25" name="Avishay Bar" />
                                <UserAvatar size="25" name="Avishay Bar" />
                                <UserAvatar size="25" name="Avishay Bar" />
                            </View>
                            <TouchableWithoutFeedback onPress={_contributors}>

                                <View style={{ flex: 1,marginLeft:10,marginRight:15,justifyContent: 'center', borderRadius: 10, height: 25, width: 100, backgroundColor: '#F0F0F0', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12 }}>See all </Text>
                                </View>

                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={_comment}>

                                <View style={{flex: 1, justifyContent: 'center', borderRadius: 10, height: 25, width: 100, backgroundColor: '#F0F0F0', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12 }}>4 Comment</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={{ flex: 2 }}>
                    </View>
                </View>

            </View>
            <View style={{ position: 'absolute', backgroundColor: data.project_status === "publish" ? "#90CAF9" : '#A5D6A7', height: 30, left: 80, right: 80, top: 0, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}>{data.project_status}</Text>

            </View>
        </View>
    )
}