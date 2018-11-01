// @flow

import React from 'react';
import { Redirect } from 'react-router-dom';
import { Backdrop, Button, Paper, TextField, Typography } from '@material-ui/core';

import Loader from './Loader.jsx';
import styles from '../styles/';

type Props = {
  checkAuth: func
};

class Login extends React.Component<Props> {
  constructor(props) {
    super(props);
    props.checkAuth();
    this.state = {
      emailRef: React.createRef(),
      passwordRef: React.createRef()
    }
  }

  render() {
    const { props, state } = this;
    const { login } = styles;

    if (!props.login.meta.isLoaded) {
      return (
        <Loader />
      );
    }

    if (props.login.meta.isAuthed) {
      const redirect = props.location.state ? props.location.state.redirect : '/';
      return redirect ? <Redirect to={redirect} /> : <Redirect to="/" />
    }

    return (
      <article className={login.root}>
        <Paper style={login.paper}>
          <Typography variant="h6" align="center" paragraph={true}>Hello, Simple-Life &lt;3</Typography>

          <section className={login.textField}>
            <TextField
              label="Mail address"
              inputRef={state.emailRef}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Password"
              type="password"
              inputRef={state.passwordRef}
              fullWidth
              margin="dense"
            />
          </section>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              props.tryLogin(state.emailRef.current.value, state.passwordRef.current.value);
            }}
          >
            Login
          </Button>
        </Paper>

        <Backdrop open className={login.backdrop} />
      </article>
    );
  }
}

export default Login;
