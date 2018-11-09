import React from 'react';
import {
  Button,
  Grid,
  Icon,
  IconButton,
  Snackbar,
  TextField
} from '@material-ui/core';

import Header from './Header.jsx';
import styles from '../styles/';

class SpotRegist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleRef: React.createRef(),
      dateRef: React.createRef(),
      startRef: React.createRef(),
      endRef: React.createRef(),
      open: false
    };
  }

  componentDidMount() {
    const { props } = this;
    const { route } = props.spot.payload;
    let rosen;

    const init = () => {
      rosen = new window.Rosen('map', {
        apiKey: 'eBBWPyXMYduCN759',
        zoom: 16,
        centerStation: route.length >= 1 ? route[0] : 23368
      });
      route.forEach(r => {
        rosen.setStationMarker(r);
      });
      rosen.addPolyline(route, { color: "#f06000", weight: 10, opacity: 0.8 });
    }

    init();
  }

  render() {
    const { props, state } = this;
    const { spotRegist } = styles;
    const { route } = props.spot.payload;

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

    const regist = () => {
      if (state.titleRef.current.value && route.length >= 2) {
        props.registSpot({
          title: state.titleRef.current.value,
          date: state.dateRef.current.value,
          start: state.startRef.current.value,
          end: state.endRef.current.value,
          route
        });
        props.history.goBack();
      } else {
        handleOpen();
      }
    };

    return (
      <article>
        <Header sub={true} />

        <section className={spotRegist.cover}>
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
            label="イベント開催日"
            type="date"
            defaultValue="2018-11-10"
            fullWidth
            inputRef={state.dateRef}
            InputLabelProps={{
              shrink: true
            }}
          />

          <Grid container spacing={16}>
            <Grid item xs={6}>
              <TextField
                label="集合時刻"
                type="time"
                defaultValue="09:00"
                fullWidth
                margin="dense"
                inputRef={state.startRef}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="解散時刻"
                type="time"
                defaultValue="18:00"
                fullWidth
                margin="dense"
                inputRef={state.endRef}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={16}>
            <Grid item xs={6}>
              <TextField
                label="スタート"
                required
                fullWidth
                disabled
                defaultValue={route.length >= 1 ? route[0] : 'スタートが未選択'}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="ゴール"
                required
                fullWidth
                disabled
                defaultValue={route.length >= 2 ? route[route.length - 1] : 'ゴールが未選択'}
              />
            </Grid>
          </Grid>

          <section className={spotRegist.selectButton}>
            <Button
              variant="contained"
              color="default"
              size="small"
              fullWidth
              onClick={() => { props.history.push('/route/select'); }}
            >
              ルートを選択する
            </Button>
          </section>

          <section className={spotRegist.mapSection}>
            <section id="map" className={spotRegist.map} />
          </section>
        </section>

        <section className={spotRegist.button}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={regist}
          >
            ルートを登録
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
