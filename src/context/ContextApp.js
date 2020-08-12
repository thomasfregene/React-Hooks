import React, { Component } from 'react';
import ContextProfile from './ContextProfile'

 class ContextApp extends Component {
    state={
        username: 'Francis',
        lastname: 'Jones',
        age: 20
    }

    render() {
        
        return (
            <div>
                <h1>Welcome to my app</h1>
                <ContextProfile profile={this.state}/>
            </div>
        )
    }
}

export default ContextApp;
