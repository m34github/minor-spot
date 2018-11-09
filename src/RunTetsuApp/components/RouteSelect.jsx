import React from 'react';
import { Button } from '@material-ui/core';
import * as R from 'ramda';

import Header from './Header.jsx';
import styles from '../styles/'

class RouteSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: []
    };
  }

  componentDidMount() {
    let rosen;
    let stations = [];

    const init = () => {
      rosen = new window.Rosen('map', {
        apiKey: 'eBBWPyXMYduCN759'
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
      });

      this.setState({
        stations
      });
    };

    init();
  }

  render() {
    const { state } = this;
    const { routeSelect } = styles;

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
            onClick={() => { console.log(state.stations); }}
          >
            submit
          </Button>
        </section>
      </article>
    );
  }
}

export default RouteSelect;
