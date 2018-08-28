import React, { Component } from 'react';
import Axios from 'axios'


class Add extends Component{
    addClick(e) {
        e.preventDefault();
        const update = this.props;
        const key = this.refs.key.value;
        this.refs.key.value = "";
        Axios.post('http://localhost:8000/api/event/add', {
            details: key,
          })
          .then(function (response) {
            update.callUpdateState(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
    updateList(e){
        e.preventDefault();
        const update = this.props;
        Axios.get('http://localhost:8000/api/event')
        .then(function (response) {
            update.callUpdateState(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
                <form className="input-group mb-3">
                <input type="text" placeholder="Enter event for add a new item" className="form-control" ref="key"/>
                <div className="input-group-append">
                    <button type="submit" className="btn btn-outline-light" onClick={this.addClick.bind(this)}>Add Item</button>
                </div>
                </form>
                <a onClick={this.updateList.bind(this)}>Update</a>
            </nav>
        );
    }
}

export default Add;