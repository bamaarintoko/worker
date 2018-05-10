import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import React, { Component } from 'react';
import { View } from 'react-native';
export const Radio = ({ radio_props, onPress }) => {
    return (
        <View style={{marginLeft:10, marginTop:5}}>

            <RadioForm
                formHorizontal={true}
                labelHorizontal={true}
                radioStyle={{ paddingRight: 20 }}
                radio_props={radio_props}
                initial={0}
                onPress={onPress}
            />
        </View>
    )
}