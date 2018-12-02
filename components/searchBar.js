import React , {Component} from 'react'
import {View,TextInput} from 'react-native'

export default class SearchBar extends Component{

    render(){
        return <View style={{flex:1,backgroundColor:"green"}}>

        <TextInput value="fsdf"  style={{flex:0.2,backgroundColor:"gray"}}/>
        </View>
        
    }
}