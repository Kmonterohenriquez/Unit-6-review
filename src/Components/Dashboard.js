import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get(`/api/posts/${this.props.user_id}`)
        .then(res =>{ this.setState({ posts: res.data })})
    }
    render(){
        return(
            <div className="Dashboard">
                <h1>Dashboard Component</h1>
            </div>
        )
    }
}

const mapStateProps = (reduxState) => {
    return reduxState
}

export default connect(mapStateProps)(Dashboard);