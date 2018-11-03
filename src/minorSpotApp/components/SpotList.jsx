// @flow

import React from 'react';
import {
  Button,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

import Header from './Header.jsx';
import Loader from './Loader.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/';

type Props = {
  loadSpotList: func
};

class SpotList extends React.Component<Props> {
  constructor(props) {
    super(props);
    props.loadSpotList('/assets/data/spot-data.json');
  }

  render() {
    const { props } = this;
    const { spotList } = styles;

    if (!props.spot.meta.isLoaded) {
      return (
        <Loader />
      );
    }

    return (
      <article>
        <Header />

        <section className={spotList.main}>
          <List>
            {
              Object.values(props.spot.payload.data.spot).map(d => (
                <section key={d.id}>
                  <ListItem button onClick={() => {
                    props.history.push({
                      pathname: '/detail/' + d.id,
                      state: d
                    });
                  }}>
                    <ListItemText primary={d.title} />
                  </ListItem>
                  <Divider />
                </section>
              ))
            }
          </List>
        </section>

        <section className={spotList.fab}>
          <Button
            variant="fab"
            color="primary"
            onClick={() => { props.history.push('/regist'); }}
          >
            <Icon>add</Icon>
          </Button>
        </section>

        <Footer value="spot" />
      </article>
    );
  }
}

export default SpotList;
