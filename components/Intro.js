import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native";

export default class Intro extends Component {


  render(){
    return (
      <View style={styles.container}>


<Text style={styles.txt}>TO-DO-LIST-APP</Text>
  
<TouchableOpacity style={styles.btn} onPress={()=> {this.props.navigation.navigate('Front')}}> ▶</TouchableOpacity>
    
      </View>
    )
  }
}

const style = StyleSheet.create({
    text:{
      
     alignSelf:"center",
          justifyContent:"center",
          color : "#001D6E",
          fontFamily: 30,
          paddingTop :100
    },
    container :  {
        
        Flex:1,
        backgroundColor:"#C4DDFF",
       
    },
    btn : {
        alignSelf : 'center',
        justifyContent:"center",
        marginTop:100,
        fontSize:80,
        color:"#001D6E"
    }
})