import React, { Component } from 'react';
import {Text, View, Alert, Button, TextInput} from 'react-native';

export default class Item extends Component {
  
  constructor(props) {
    super(props);
    var ranColor = '#00'+Math.floor(Math.random()*65536).toString(16);
    this.state = {
        selectedColor: ranColor,
        data: this.props.item,
        edit: false,
        text: this.props.item.details
      };
  }

  deleteItem() {
    fetch('http://192.168.8.95/api/event/delete/'+this.state.data.id, {
      method: 'DELETE',
    }).then((response) => response.json())
        .then((responseJson) => {
        this.props.deleteItem(responseJson.response);
        // alert(responseJson.msg);
      })
      .catch((error) => {
        alert(error);
      });
  }

  updateItem() {
    fetch('http://192.168.8.95/api/event/edit/'+this.state.data.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        details: this.state.text
      }),
    }).then((response) => response.json())
        .then((responseJson) => {
        this.props.updateItem(responseJson.response);
        // alert(responseJson.msg);
      })
      .catch((error) => {
        alert(error);
      });
  }

  editClick() {
    this.setState((prevState) => 
      ({ edit: !prevState.edit})
    )
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
    	<View style={{flex: 100, flexDirection: 'row', padding: 10, border: 5}}>
    	 	<View style={{width: 5, height: 60, backgroundColor: this.state.selectedColor, marginRight:10}} />
    		<View style={{flex:1}}>
	    		{this.state.edit ? 
            <TextInput 
              onChangeText={(text) => this.setState({text})} 
              value={this.state.text}
            /> : <Text>{this.state.data.details}</Text>}
          <Text>{this.state.data.created_at}</Text>
	    	</View>
	    	<View style={{width: 70}}>
          
          {this.state.edit ? 
          <Button
            color={this.state.selectedColor}
            onPress={this.updateItem.bind(this)}
            title="Save"
          /> : <Button
            color={this.state.selectedColor}
            onPress={this.editClick.bind(this)}
            title="Edit"
          /> }
          
          <Button
            color={this.state.selectedColor}
            onPress={this.deleteItem.bind(this)}
            title="Delete"
          />
	    	</View>
    	</View>
    );

  }
}
