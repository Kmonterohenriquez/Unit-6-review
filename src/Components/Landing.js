import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Landing extends Component {
    render(){
        return(
            <div className="Landing">
                <h1>Landing Component</h1>
                <Link to='/'>Register</Link>
            </div>
        )
    }
}

export default Landing;