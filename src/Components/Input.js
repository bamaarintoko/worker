import React, { Component } from 'react';
import { Container, Header, Content, Input, Item, Form, Textarea } from 'native-base';

export const InputReg = ({ placeholder,onChangeText,autoCapitalize,secureTextEntry,value }) => {
    return (
        <Item style={{ height: 40, borderRadius: 10, backgroundColor: '#FFFFFF', marginLeft: 10, marginRight: 10, marginTop: 5 }} regular>
            <Input secureTextEntry={secureTextEntry} 
                    autoCapitalize={autoCapitalize} 
                    onChangeText={onChangeText} 
                    style={{ fontSize: 14 }} 
                    placeholder={placeholder} value={value} />
        </Item>
    )
}

export const InputArea = ({placeholder,rowSpan,onChangeText,value}) => {
    return (

        <Form>
            <Textarea value={value} onChangeText={onChangeText} style={{borderRadius: 10, backgroundColor: '#FFFFFF', marginLeft: 10, marginRight: 10, marginTop: 5,fontSize: 14 }} rowSpan={rowSpan} bordered placeholder={placeholder} />
        </Form>
    )
}