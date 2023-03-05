import React,{Component} from 'react';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import {TouchableOpacity,View,StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';
import Calendar from  'react-calendar';
import {RFValue} from "react-native-responsive-fontSize";

export default class Front extends Components{
    constructor (){
        super()
        this.state = {
            name : ''
        }
    }
    
     render(){
        return (
            <View style = {Styles.container}>
                <Card style = {Styles.card}>
                    <TextInput style = {Styles.inputFont}></TextInput>
                <TouchableOpacity style = {Styles.btn}onPress = {() => {this.props.navigation.navigate}}></TouchableOpacity>
                </Card>
            </View>
        )
     }
}
