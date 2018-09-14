import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

import ItemList from './components/itemList.js';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:100}}>
      	
      	<View style={{height:50, backgroundColor: '#008080'}}>
      		<Text style={{fontSize:20, padding:12, color: '#fff'}}>Todo App</Text>
      	</View>
      	
      	<View style={{flex: 1}}>
      		<ItemList/>
      	</View>

      </View>
    );
  }
}
