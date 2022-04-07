import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signup, login } from '../actions/account';
import fetchStates from '../reducers/fetchStates';
import SignUpForm from './SignUpForm';

class AuthForm extends Component {
  state = { 
    username: '', 
    password: '', 
    buttonClicked: false 
  };

  updateUsername = event => {
    this.setState({ username: event.target.value });
  }

  updatePassword = event => {
    this.setState({ password: event.target.value });
  }

  // signup = () => {
  //   this.setState({ buttonClicked: true });

  //   const { username, password } = this.state;

  //   this.props.signup({ username, password });
  // }

  signup = () => {
    this.setState({ buttonClicked: true });

    const { username, password, accountType, fullName } = this.state;

    this.props.signup({ username, password, accountType, fullName });
  }

  login = () => {
    this.setState({ buttonClicked: true });

    const { username, password } = this.state;

    this.props.login({ username, password });
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

        <FormGroup className='mb-3'>
          <FormLabel className='form-label'>Password</FormLabel>
          <FormControl
            type='password'
            value={this.state.password}
            placeholder='password'
            onChange={this.updatePassword}
          />
        </FormGroup>

        <div className='col-12'>
          <Button onClick={this.login}>Log In</Button>
          <span> or </span>
          <Link to='/sign-up'>Sign Up</Link>
        </div>
        <br />
        {this.Error}
        {/* <div>
        <hr />
        <SignUpForm />
        </div> */}
      </div>
    );
  }
}

export default connect(
  ({ account }) => ({ account }),
  { signup, login }
  // { login }
)(AuthForm);