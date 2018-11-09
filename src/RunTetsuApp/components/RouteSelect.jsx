// @flow

import React from 'react';
import { Button } from '@material-ui/core';
import * as R from 'ramda';

import Header from './Header.jsx';
import styles from '../styles/'

type Props = {
  spot: object
};

class RouteSelect extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      stations: props.spot.payload.route
    };
  }

  componentDidMount() {
    const { props, state } = this;
    let rosen;
    let { stations } = state;

    const init = () => {
      rosen = new window.Rosen('map', {
        apiKey: 'eBBWPyXMYduCN759',
        zoom: 16,
        centerStation: stations.length >= 1 ? stations[0] : 23368
      });

      props.spot.payload.route.forEach(route => {
        rosen.setStationMarker(route);
      });

      rosen.on('selectStation', (data) => {
        const station = data.stations[0];

        if (station) {
          if (stations.includes(station.code)) {
            const index = stations.indexOf(station.code);
            rosen.unsetStationMarker(stations[index]);
            stations = R.remove(index, 1, stations);
          } else {
            stations.push(station.code);
            rosen.setStationMarker(station.code);
          }
        }

        this.setState({
          stations
        });
      });
    };

    init();
  }

  render() {
    const { props, state } = this;
    const { routeSelect } = styles;

    const select = () => {
      props.selectRoute(state.stations);
      props.history.goBack();
    };

    return (
      <article>
        <Header sub={true} />

        <section>
          <section id="map" className={routeSelect.map} />
        </section>

        <section className={routeSelect.button}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={select}
          >
            ルート決定
          </Button>
        </section>
      </article>
    );
  }
}

export default RouteSelect;
