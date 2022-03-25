import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAccountInfo } from '../actions/accountInfo';

class AccountInfo extends Component {
    componentDidMount() {
        this.props.fetchAccountInfo();
    }

    render() {
        return (
            <div>
                <h3>Account Info</h3>
                <div>Username: {this.props.accountInfo.username}</div>
                <div>Name: {this.props.accountInfo.fullName}</div>
                <div>Account Type: {this.props.accountInfo.accountType}</div>
            </div>
        )
    }
}

export default connect(
    ({ accountInfo }) => ({ accountInfo }),
    { fetchAccountInfo }
)(AccountInfo);