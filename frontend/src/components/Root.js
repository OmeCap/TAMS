import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from './Home';
import AuthForm from './AuthForm';
import TaApplication from './TaApplication';
import SimpleForm from './SimpleForm';
import ModuleForm from './ModuleForm';

class Root extends Component {
  render() {
    return (
      // this.props.account.loggedIn ? <Home /> : <AuthForm />
      this.props.account.loggedIn ? <TaApplication /> : <AuthForm />
      // false ? <Home /> : <TaApplication />
      // false ? <Home /> : <SimpleForm />
      // false ? <Home /> : <ModuleForm />
    )
  }
};

export default connect(
  ({ account }) => ({ account }),
  null
)(Root);