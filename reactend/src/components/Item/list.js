import React, { Component } from 'react';
import ListItem from './listItem';

class List extends Component{
    render() {
        const result = this.props.response;
        if(result.hasOwnProperty('response')){
            var results = result.response.map(item =>{ 
                return(
                    <ListItem key={item.id} item={item}/>
                )
            })
        }

        return (
            <div className="list-group">
                <br/>
                {results}
                <br/>
            </div>
        );
    }
}

export default List;