import React , {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import NewsList from '../components/newsList'
import Header from '../components/header'
import SearchBar from '../components/searchBar'
export default class Main extends React.Component {
    render() {
      return (
        <View style={{flex:1}}>
          <SearchBar/>
          <Text style={{flex:0.2}}>Open up App.</Text>

          <Header/>
          <NewsList />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });