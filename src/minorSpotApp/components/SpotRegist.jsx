import React from 'react';
import { Button, Icon, IconButton, Snackbar, TextField } from '@material-ui/core';

import Header from './Header.jsx';
import styles from '../styles/';

class SpotRegist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleRef: React.createRef(),
      openRef: React.createRef(),
      closeRef: React.createRef(),
      placeRef: React.createRef(),
      open: false
    };
  }

  render() {
    const { props, state } = this;
    const { spotRegist } = styles;

    const handleOpen = () => {
      this.setState({
        open: true
      });
    };

    const handleClose = () => {
      this.setState({
        open: false
      });
    };

    return (
      <article>
        <Header sub={true} />

        <section
          style={{
            background: 'url(http://source.unsplash.com/tvc5imO5pXk/800x450) center / cover',
            width: '100vw',
            height: '25vh'
          }}
          className={spotRegist.cover}
        >
          <TextField
            label="タイトル"
            variant="filled"
            required
            inputRef={state.titleRef}
            InputLabelProps={{
              style: {
                color: '#fff'
              }
            }}
            InputProps={{
              style: {
                color: '#fff',
                fontSize: 'x-large'
              }
            }}
          />
        </section>

        <section className={spotRegist.main}>
          <TextField
            label="オープン"
            type="time"
            defaultValue="09:00"
            margin="dense"
            fullWidth
            inputRef={state.openRef}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            label="クローズ"
            type="time"
            defaultValue="18:00"
            margin="dense"
            fullWidth
            inputRef={state.closeRef}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          <TextField
            label="場所"
            margin="dense"
            required
            fullWidth
            inputRef={state.placeRef}
          />
        </section>

        <section className={spotRegist.button}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              if (state.titleRef.current.value && state.placeRef.current.value) {
                props.registSpot({
                  title: state.titleRef.current.value,
                  open: state.openRef.current.value,
                  close: state.closeRef.current.value,
                  place: state.placeRef.current.value
                });
              } else {
                handleOpen();
              }
            }}
          >
            登録
          </Button>
        </section>

        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={state.open}
          onClose={handleClose}
          autoHideDuration={6000}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">必須項目が空欄です</span>}
          action={[
            <IconButton
              key="close"
              color="inherit"
              onClick={handleClose}
            >
              <Icon>close</Icon>
            </IconButton>,
          ]}
        />
      </article>
    );
  }
}

export default SpotRegist;
