import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Row, Col } from 'react-bootstrap';
import fetchStates from '../reducers/fetchStates';
import { uploadProfile } from '../actions/taprofile';

class TaApplication extends Component {
  state = { 
    email: '',
    upi: '', 
    homeAddress: '', 
    currentYear: '',
    roleType: '',
    feeStatus: '',
    buttonClicked: false };

  updateEmail = event => {
    this.setState({ email: event.target.value });
  }

  updateUpi = event => {
    this.setState({ upi: event.target.value });
  }

  updateAddress = event => {
    this.setState({ homeAddress: event.target.value });
  }

  updateYear = event => {
    this.setState({ currentYear: event.target.value });
  }

  updateRoleType = event => {
    this.setState({ roleType: event.target.value });
  }

  updateFeeStatus = event => {
    this.setState({ feeStatus: event.target.value });
  }

  handleSubmit = () => {
    this.setState({ buttonClicked: true });

    const { email, upi, homeAddress, currentYear, roleType, feeStatus } = this.state;

    this.props.uploadProfile({ email, upi, homeAddress, currentYear, roleType, feeStatus });
    // console.log(this.state);
  }

  get Error() {
    if (
      this.state.buttonClicked && 
      this.props.taProfile.status == fetchStates.error
    ) {
      return <div>{this.props.taProfile.message}</div>
    }
  }

  render() {
    return (
      <div>
        <h3>TA Application Form</h3>
        <Form>
            <Form.Group as={Row} className="mb-3" controlid="email">
                <Form.Label>
                Email
                </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.updateEmail}
                />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlid="upi">
                <Form.Label>
                UPI
                </Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="UPI"
                  value={this.state.upi}
                  onChange={this.updateUpi}
                />
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlid="address">
                <Form.Label>
                Address
                </Form.Label>
                <Form.Control 
                type="text" 
                placeholder="address"
                value={this.state.homeAddress}
                onChange={this.updateAddress}
                />
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={4}>
                  Year
              </Form.Label>
              <Form.Control
                as="select"
                onChange={this.updateYear}
              >
                <option value=""> Select an option</option>
                <option value="year1">Year 1</option>
                <option value="year2">Year 2</option>
                <option value="year3">Year 3</option>
                <option value="year4">Year 4</option>
                <option value="year5">Year 5</option>
            </Form.Control>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={4}>
                PhD or Research Assistant
            </Form.Label>
            <Form.Control
                as="select"
                onChange={this.updateRoleType}
            >
              <option value=""> Select an option</option>
              <option value="phd">Phd</option>
              <option value="ra">Research Assistant</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={4}>
                Home, EU or International
            </Form.Label>
            <Form.Control
                as="select"
                onChange={this.updateFeeStatus}
            >
              <option value=""> Select an option</option>
              <option value="home">Home</option>
              <option value="eu">EU</option>
              <option value="international">International</option>
            </Form.Control>
            </Form.Group>
                        
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 8, offset: 5 }}>
                <Button onClick={this.handleSubmit} >Submit</Button>
                </Col>
            </Form.Group>
        </Form>
      </div>
    );
  }
}

export default connect(
  ({ taProfile }) => ({ taProfile }),
  { uploadProfile }
)(TaApplication);
