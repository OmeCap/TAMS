import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { logout } from '../actions/account';
import TaApplication from './taApplication';
import TaNavigation from './TaNavigation';
import AccountInfo from './AccountInfo';

import ProtectedScreen from './Test';

class Home extends Component {
    render() {
        return (
            <div>
                <Button onClick={this.props.logout} className='logout-button'>
                Log Out
                </Button>
                <h1>TAMS Homepage</h1>
                {/* <TaNavigation /> */}
                <p>This is Homepage.</p>
                <hr />
                <Link to='/ta-application'> TA Application </Link>
                <hr />
                <Link to='/protected'> Protected </Link>
                <hr />
                {/* <AccountInfo /> */}
            </div>
        );
    }
}

export default connect(null, { logout })(Home);