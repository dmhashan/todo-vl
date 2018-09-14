import React, { Component } from 'react';
import { Text, View, FlatList, Alert, ActivityIndicator, Button } from 'react-native';

import Item from './item.js';
import Textinput from './textinput.js';

export default class ItemList extends Component {

	constructor(props) {
    	super(props);
	    this.state = {
	    	isLoading: true, 
	    	dataSource: [],
	    	refresh: true
	    };
	    if(this.state.refresh){
	    	this.componentDidMount();	
	    }
	    
	}

	componentDidMount(){
	    return fetch('http://192.168.8.95/api/event')
	      .then((response) => response.json())
	      .then((responseJson) => {

	        this.setState({
	          isLoading: false,
	          dataSource: responseJson.response,
	        });

	      })
	      .catch((error) =>{
	        console.error(error);
	      });
	}

	addItem(newObj) {
		this.setState((prevState) => 
		  ({ dataSource: prevState.dataSource.concat(newObj)})
		)
	}

	deleteItem(targetObj) {
		var index = this.state.dataSource.findIndex(el => el.id==targetObj.id);
		// alert(index);
		var top = this.state.dataSource.slice(0, index);
		var bottom = this.state.dataSource.slice(index+1);
		this.setState({ dataSource: top.concat(bottom)});
	}

	updateItem(targetObj) {
		this.setState({ dataSource: []});
		this.componentDidMount();
	}

	render() {

		if(this.state.isLoading){
		  return(
		    <View style={{flex: 1, padding: 20}}>
		      <ActivityIndicator/>
		    </View>
		  )
		}

		return (
		  <View style={{flex: 1}}>
		  	<Textinput addItem={this.addItem.bind(this)}/>
      		<FlatList
		      	data={this.state.dataSource}
		      	extraData={this.state.refresh}
		      	renderItem={({item}) => 
		      		<Item 
		      			key={item.id} 
		      			item={item} 
		      			deleteItem={this.deleteItem.bind(this)}
				      	updateItem={this.updateItem.bind(this)}
		      		/>
		  		}
		      	keyExtractor={(item, index) => index}
		    />

		  </View>
		);
	}
	
}
