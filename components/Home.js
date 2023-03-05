import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native";

import Calendar from './Calendar';
import Card from 'react-native';


export default class Home extends Component {

   render(){
    const name = 'this.props.navigation.navigate.Intro'
    const Task = 'this.props.navigation.navigate.Intro'
    const Taskdescription = 'this.props.navigation.naviagte.Intro'

    return(
        <View style = {Styles.container}>
            <Card style = {Styles.card}></Card>
            <Text style = {Styles.Text}></Text> 
            <TouchableOpacity style = {Styles.btn}onPress = {()=> {this.props.navigation.navigateCreateTask}}></TouchableOpacity>
        
        </View>
    )
   }
} 