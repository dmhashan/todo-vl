import React, { Component } from 'react';
import Add from './add';
import List from './list';

class Index extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            result:{}
        }
    }

    updateState(updatedresult) {
        this.setState({
            result:updatedresult
        })
    }

    render() {
        return (
            <div className="container">
                <Add callUpdateState={this.updateState.bind(this)}/>
                <List response={this.state.result}/>
            </div>
        );
    }
}

export default Index;