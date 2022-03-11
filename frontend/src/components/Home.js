import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
// import { Switch, Route, Link } from 'react-router-dom';
import { logout } from '../actions/account';
import TaApplication from './taApplication';

class Home extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.logout} className='logout-button'>
                Log Out
                </Button>
                <h1>TAMS Homepage</h1>
                <p>This is Homepage.</p>
            </div>
        );
    }
}

export default connect(null, { logout })(Home);