import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';
import axios from 'axios';

class Register extends Component {
    state={
        email: '',
        password:  ''
    }

    
    handleInput = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleRegister =()=>{
        const { email, password } = this.state;
        axios.post('/api/register', {email, password})
        .then(res => {
            this.props.getUser(res.data)
        })
    }

    render(){
        return(
            <div className="Register">
                <input 
                    maxLength='100'
					placeholder='Enter Email'
                    type='email' 
                    name='email'
                    onChange={(event) => this.handleInput(event)}/>
                <input
                    type='password' 
                    maxLength='20'
                    placeholder='Enter Password'
                    name='password'
                    onChange={(event) => this.handleInput(event)}/>
                    <button onClick={this.handleRegister}>Sign up</button>
                <Link to='/login'>Login</Link>
            </div>
        )
    }
}

export default connect(null, {getUser})(Register);