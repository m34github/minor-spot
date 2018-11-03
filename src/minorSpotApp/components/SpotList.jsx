// @flow

import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  Icon,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';

import { Header } from '../containers/Login';
import Loader from './Loader.jsx';
import Footer from './Footer.jsx';
import styles from '../styles/';

type Props = {
  loadSpotList: func
};

class SpotList extends React.Component<Props> {
  constructor(props) {
    super(props);
    props.loadSpotList();
  }

  render() {
    const { props } = this;
    const { password } = styles;

    if (!props.spot.meta.isLoaded) {
      return (
        <Loader />
      );
    }

    return (
      <article>
        <Header />

        <section className={password.main}>
          <List>
            {
              props.spot.payload.data.spots.map(d => (
                <section key={d.name}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>あ</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={d.name} />
                  </ListItem>
                  <Divider />
                </section>
              ))
            }
          </List>
        </section>

        <section className={password.fab}>
          <Button
            variant="fab"
            color="primary"
            onClick={() => { props.history.push('/detail'); }}
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
