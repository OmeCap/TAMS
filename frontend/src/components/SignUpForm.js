import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, FormLabel, Row } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { signup } from '../actions/account';
import fetchStates from '../reducers/fetchStates';
import store from '../store';
import { fetchAuthenticated } from '../actions/account';

class SignUpForm extends Component {
  state = { 
    username: '', 
    password: '', 
    accountType: '', 
    fullName: '',
    buttonClicked: false 
  };

  updateUsername = event => {
    this.setState({ username: event.target.value });
  }

  updatePassword = event => {
    this.setState({ password: event.target.value });
  }

  updateAccountType = event => {
    this.setState({ accountType: event.target.value });
  }

  updateFullName = event => {
    this.setState({ fullName: event.target.value });
  }

  signup = () => {
    this.setState({ buttonClicked: true });

    const { username, password, accountType, fullName } = this.state;

    this.props.signup({ username, password, accountType, fullName });

    const currentUser = store.getState().account.loggedIn;
    
    // if (currentUser) {
    //   return <Navigate to="/" replace/>
    // } else {
    //   this.setState({ 
    //     username: '', 
    //     password: '', 
    //     accountType: '', 
    //     fullName: '',
    //     buttonClicked: false }
    //   )}
    // console.log(currentUser)
  }

  get Error() {
    if (
      this.state.buttonClicked &&
      this.props.account.status === fetchStates.error
    ) {
      return <div>{this.props.account.message}</div>
    }
  }

  render() {
    return (
      <div>
        <h2>TAMS</h2>
        <FormGroup className="mb-3">
          <FormLabel className="form-label">Username</FormLabel>
          <FormControl
            type='text'
            value={this.state.username}
            placeholder='username'
            onChange={this.updateUsername}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel className="form-label">Password</FormLabel>
          <FormControl
            type='password'
            value={this.state.password}
            placeholder='password'
            onChange={this.updatePassword}
          />
        </FormGroup>

        <FormGroup className="mb-3">
          <FormLabel className="form-label">Full Name</FormLabel>
          <FormControl
            type='text'
            value={this.state.fullName}
            placeholder='Full Name'
            onChange={this.updateFullName}
          />
        </FormGroup>

        <FormGroup className="mb-3">
            <FormLabel className='form-label'>Account Type</FormLabel>
            <FormControl
                className="form-control"
                as="select"
                onChange={this.updateAccountType}
            >
              <option value=""> Select the account type</option>
              <option value="TA">TA</option>
              <option value="ML">Module Leader</option>
              <option value="AA">Academic Admin</option>
              <option value="HRA">HR Admin</option>
            </FormControl>
        </FormGroup>
        {/* <FormGroup>
          <FormControl
            type='text'
            value={this.state.accountType}
            placeholder='account type'
            onChange={this.updateAccountType}
          />
        </FormGroup> */}
        <div className="col-12">
          <Button type="submit" onClick={this.signup}>Sign Up</Button>
          <span> or </span>
          <Link to='/'>Login</Link>
        </div>
        <br />
        {this.Error}
      </div>
    );
  }
}

export default connect(
  ({ account }) => ({ account }),
  { signup }
)(SignUpForm);