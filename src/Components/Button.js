import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export const Btn = ({text,onPress})=>{
    return (
        <Button onPress={onPress} style={{borderRadius:10, marginLeft:10, marginRight:10, marginTop:5}} full info>
            <Text>{text}</Text>
          </Button>
    )
}