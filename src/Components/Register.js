import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Register extends Component {
    render(){
        return(
            <div className="Register">
                <h1>Register Component</h1>
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}

export default Register;