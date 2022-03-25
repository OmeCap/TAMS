import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import { signup } from '../actions/account';
import fetchStates from '../reducers/fetchStates';

class SignUpForm extends Component {
  state = { 
    username: '', 
    password: '', 
    accountType: '', 
    fullName: '',
    buttonClicked: false };

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
        <Form.Group>
          <Form.Control
            type='text'
            value={this.state.username}
            placeholder='username'
            onChange={this.updateUsername}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='password'
            value={this.state.password}
            placeholder='password'
            onChange={this.updatePassword}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            value={this.state.fullName}
            placeholder='Full Name'
            onChange={this.updateFullName}
          />
        </Form.Group>
        <br />
        <Form.Group as={Row} className="mb-3">
            {/* <Form.Label as="legend" column sm={4}>
                Account Type
            </Form.Label> */}
            <Form.Control
                as="select"
                onChange={this.updateAccountType}
            >
              <option value=""> Select the account type</option>
              <option value="TA">TA</option>
              <option value="ML">Module Leader</option>
              <option value="AA">Academic Admin</option>
              <option value="HRA">HR Admin</option>
            </Form.Control>
        </Form.Group>
        {/* <Form.Group>
          <Form.Control
            type='text'
            value={this.state.accountType}
            placeholder='account type'
            onChange={this.updateAccountType}
          />
        </Form.Group> */}
        <br />
        <div>
          <Button type='submit' onClick={this.signup}>Sign Up</Button>
          {/* <span> or </span>
          <Link to='/'>Login</Link> */}
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