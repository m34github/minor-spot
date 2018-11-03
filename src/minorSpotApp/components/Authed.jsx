// @flow

import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import Loader from './Loader.jsx';

type Props = {
  checkAuth: func,
  login: object
};

class Authed extends React.Component<Props> {
  constructor(props) {
    super(props);
    props.checkAuth(props.login.payload.uid);
  }

  render() {
    const { props } = this;

    if (!props.login.meta.isLoaded) {
      return (
        <Loader />
      );
    }

    if (props.login.meta.isAuthed) {
      return props.children;
    }

    return (
      <Redirect to={{
        pathname: '/login',
        state: {
          redirect: props.location.pathname
        }
      }} />
    );
  }
}

export default withRouter(Authed);
