import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, TextField, Typography } from '@material-ui/core';

import Header from './Header.jsx';
import styles from '../styles/';

class SpotDetail extends React.Component {
  componentDidMount() {
    const { props } = this;

    if (props.location.state) {
      const { route } = props.location.state;
      let rosen;

      const init = () => {
        rosen = new window.Rosen('map', {
          apiKey: 'eBBWPyXMYduCN759',
          zoom: 15,
          centerStation: route.length >= 1 ? route[0] : 23368
        });
        route.forEach(r => {
          rosen.setStationMarker(r);
        });
        rosen.addPolyline(route, { color: "#f06000", weight: 10, opacity: 0.8 });
      }

      init();
    }
  }

  render() {
    const { props } = this;
    const { spotDetail } = styles;
    const spot = props.location.state;

    if (!props.location.state) {
      return (
        <Redirect to="/spot/list" />
      );
    }

    return (
      <article>
        <Header sub={true} />

        <section className={spotDetail.cover}>
          <TextField
            variant="filled"
            required
            disabled
            defaultValue={spot.title}
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

        <section className={spotDetail.main}>
          <Typography variant="h6">イベント概要</Typography>
          <section className={spotDetail.abstract}>
            <TextField
              label="イベント開催日"
              type="date"
              fullWidth
              defaultValue={spot.date}
              margin="dense"
              disabled
            />
            <Grid container spacing={16}>
              <Grid item xs={6}>
                <TextField
                  label="集合時刻"
                  type="time"
                  fullWidth
                  defaultValue={spot.start}
                  margin="dense"
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="解散時刻"
                  type="time"
                  fullWidth
                  defaultValue={spot.end}
                  margin="dense"
                  disabled
                />
              </Grid>
            </Grid>
          </section>

          <Typography variant="h6">コース</Typography>
          <section className={spotDetail.course}>
            <section id="map" className={spotDetail.map} />
          </section>
        </section>

      </article>
    );
  }
}

export default SpotDetail;
