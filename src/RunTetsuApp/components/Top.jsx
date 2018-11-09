import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Backdrop, Paper, TextField, Typography } from '@material-ui/core';

import styles from '../styles/';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: React.createRef(),
      pw: React.createRef()
    };
  }

  render() {
    const { props, state } = this;
    const { top } = styles;

    return (
      <article className={top.root}>
        <Paper style={top.paper}>
          <Typography variant="h6" align="center" paragraph={true}>Hello, brand new world!</Typography>

          <section className={top.textField}>
            <TextField
              label="Mail address"
              defaultValue="demo@email.com"
              fullWidth
              margin="dense"
              inputRef={state.id}
            />
            <TextField
              label="Password"
              type="password"
              defaultValue="password"
              fullWidth
              margin="dense"
              inputRef={state.pw}
            />
          </section>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              if (state.id.current.value === 'demo@email.com' && state.pw.current.value === 'password') {
                props.history.push('/spot/list');
              }
            }}
          >
            Login
          </Button>
        </Paper>

        <Backdrop open className={top.backdrop} />
      </article>
    );
  }
}

export default withRouter(Top);
