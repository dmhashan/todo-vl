import React, { Component } from 'react';

class ListItem extends Component{
    
    render() {  
        const item = this.props.item;
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <div className="input-group mb-3">
                        
                        <input type="text" className="form-control" ref={item.id} value={item.details}/>
                        
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <button type="button" className="edit close">
                                <span className="fa fa-pencil"></span>
                                </button>
                            </span>

                            <span className="input-group-text">
                                <button type="button" className="red close">
                                <span className="fa fa-close" aria-hidden="true"></span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
                <small className="text-muted">
                    Status : 
                        {/* <span className="badge badge-primary">Primary Data</span>
                        <span className="badge badge-success">Updated Data</span>
                        <span className="badge badge-light">User Editable Mode</span> */}
                    Updated at : <span className="badge badge-secondary"> {item.updated_at} </span>
                    Created at : <span className="badge badge-secondary"> {item.created_at} </span>
                </small>
            </div>
        );
    }
}

export default ListItem;