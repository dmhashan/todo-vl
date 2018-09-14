import React, { Component } from 'react';
import { View, TextInput, Alert, Button, ActivityIndicator } from 'react-native';

export default class Textinput extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', isLoading:false};
  }

  addItem() {
  	if(this.state.text == '') {
  		alert('Empty input');
  	} else {
	  	this.setState({isLoading:true});
		fetch('http://192.168.8.95/api/event/add', {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		    details: this.state.text
		  }),
		}).then((response) => response.json())
		    .then((responseJson) => {
		    	//alert(responseJson.msg);
		    	this.props.addItem(responseJson.response);
		    	this.setState({
		    		text : '',
		    		isLoading:false
		    	});
		    })
		    .catch((error) => {
			    alert(error);
			    this.setState({isLoading:false});
		    });
	    }
  }

  render() {

  	if(this.state.isLoading){
		  return(
		    <View style={{height:100, padding: 10}}>
		      <ActivityIndicator/>
		    </View>
		  )
		}

    return (
    	<View style={{height:100 ,padding: 10}}>

			<TextInput
				style={{height: 40, borderColor: '#008080', borderWidth: 1}}
				onChangeText={(text) => this.setState({text})}
			    value={this.state.text}
			/>

		    <Button
		    	color="#008080"
				onPress={this.addItem.bind(this)}
				title="Add"
			/>

		</View>
    );
  }
}