import React, { Component } from 'react';

export class User extends Component{
    render(){
        const {logOut} = this.props
        return (
            
            <div className='form'>
                
                <button className='button' onClick={logOut}>Logout</button>
            </div>
            
        )
    }
}