import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

import { Header } from '../containers/Login';
import styles from '../styles/';

class PasswordRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleRef: React.createRef(),
      usernameRef: React.createRef(),
      passwordRef: React.createRef(),
      urlRef: React.createRef(),
      commentRef: React.createRef()
    };
  }

  render() {
    const { props, state } = this;
    const { passwordRegister } = styles;

    return (
      <article>
        <Header sub={true} transparent={true} />

        <section>
          <section
            style={{
              background: 'url(/assets/img/misc/password-cover.jpg) center / cover',
              width: '100vw',
              height: '25vh'
            }}
            className={passwordRegister.cover}
          >
            <TextField
              label="Title"
              variant="filled"
              required
              className={passwordRegister.underline}
              InputProps={{
                style: passwordRegister.title
              }}
              InputLabelProps={{
                style: passwordRegister.label
              }}
              inputRef={state.titleRef}
              defaultValue={props.password.payload.newPasswordData.title}
            />
          </section>

          <section className={passwordRegister.main}>
            <TextField
              label="Username"
              margin="dense"
              required
              fullWidth
              inputRef={state.usernameRef}
              defaultValue={props.password.payload.newPasswordData.username}
            />
            <Grid container alignItems="center">
              <Grid item xs={8}>
                <TextField
                  label="Password"
                  margin="dense"
                  required
                  fullWidth
                  inputRef={state.passwordRef}
                  defaultValue={props.password.payload.newPasswordData.password}
                />
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => {
                    props.updateNewPasswordData({
                      title: state.titleRef.current.value,
                      username: state.usernameRef.current.value,
                      password: state.passwordRef.current.value,
                      url: state.urlRef.current.value,
                      comment: state.commentRef.current.value
                    });
                    props.history.push('/password/generate');
                  }}
                >
                  Generate
                </Button>
              </Grid>
            </Grid>
            <TextField
              label="URL"
              margin="dense"
              fullWidth
              inputRef={state.urlRef}
              defaultValue={props.password.payload.newPasswordData.url}
            />
            <TextField
              label="Comment"
              margin="dense"
              fullWidth
              multiline
              rows={6}
              inputRef={state.commentRef}
              defaultValue={props.password.payload.newPasswordData.comment}
            />
          </section>
        </section>

        <section className={passwordRegister.bottomButton}>
          <Grid container>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={() => {
                  props.updateNewPasswordData({
                    title: '',
                    username: '',
                    password: '',
                    url: '',
                    comment: ''
                  });
                  props.history.goBack();
                }}
              >
                Discard
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                onClick={() => {
                  props.saveNewPasswordData({
                    title: state.titleRef.current.value,
                    username: state.usernameRef.current.value,
                    password: state.passwordRef.current.value,
                    url: state.urlRef.current.value,
                    comment: state.commentRef.current.value
                  });
                  props.history.goBack();
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </section>
      </article>
    );
  }
}

export default PasswordRegister;
